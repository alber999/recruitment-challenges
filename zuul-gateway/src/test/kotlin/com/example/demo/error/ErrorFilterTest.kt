package com.example.demo.error

import com.fasterxml.jackson.databind.ObjectMapper
import com.netflix.zuul.context.RequestContext
import com.netflix.zuul.exception.ZuulException
import com.netflix.zuul.monitoring.CounterFactory
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.doReturn
import org.mockito.Mockito.mock
import org.springframework.cloud.netflix.zuul.metrics.EmptyCounterFactory
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class ErrorFilterTest {

    companion object {
        private const val THROWABLE_KEY = "throwable"
    }

    private lateinit var request: HttpServletRequest

    private lateinit var response: HttpServletResponse

    private lateinit var filter: ErrorFilter

    @BeforeEach
    fun setUp() {
        CounterFactory.initialize(EmptyCounterFactory())
        request = mock(HttpServletRequest::class.java)
        response = mock(HttpServletResponse::class.java)
        filter = ErrorFilter()

        doReturn("/x").`when`(request).servletPath
    }

    @Test
    fun runException() {
        val context = RequestContext()
        context.request = request
        context.response = response
        context[THROWABLE_KEY] = ZuulException("message", 400, "cause")
        RequestContext.testSetCurrentContext(context)
        filter.run()
        val error = ObjectMapper().readValue(context.responseBody, Error::class.java)

        Assertions.assertEquals(400, error.status)
        Assertions.assertEquals("Bad Request", error.error)
        Assertions.assertEquals("Bad Request", error.message)
        Assertions.assertEquals(400, context.responseStatusCode)
    }

    @Test
    fun runNoException() {
        val context = RequestContext()
        context.request = request
        context.response = response
        RequestContext.testSetCurrentContext(context)
        filter.run()

        Assertions.assertNull(context.responseBody)
    }
}
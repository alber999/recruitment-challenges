package com.example.demo.transactions

import com.netflix.zuul.context.RequestContext
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.doReturn
import org.mockito.Mockito.mock
import javax.servlet.http.HttpServletRequest

class TransactionsAuthFilterTest {

    companion object {
        private const val SERVICE_ID = "transactions"
    }

    private lateinit var request: HttpServletRequest

    private lateinit var properties: TransactionsProperties

    private lateinit var filter: TransactionsAuthFilter

    @BeforeEach
    fun setUp() {
        request = mock(HttpServletRequest::class.java)
        properties = mock(TransactionsProperties::class.java)
        filter = TransactionsAuthFilter(properties)

        doReturn("username").`when`(properties).username
        doReturn("password").`when`(properties).password
        doReturn("/$SERVICE_ID").`when`(request).servletPath
    }

    @Test
    fun runAddsAuthHeader() {
        val context = context()
        filter.run()
        Assertions.assertEquals(
                "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
                context.zuulRequestHeaders["authorization"])
    }

    @Test
    fun runAddsAuthHeaderEmptyCredentials() {
        doReturn("").`when`(properties).username
        doReturn("").`when`(properties).password

        Assertions.assertThrows(IllegalArgumentException::class.java) {
            filter.run()
        }
    }

    @Test
    fun shouldFilterOnTransactionsPath() {
        context()
        Assertions.assertTrue(filter.shouldFilter())
    }

    @Test
    fun shouldFilterOnOtherPath() {
        doReturn("/x").`when`(request).servletPath
        context()
        Assertions.assertFalse(filter.shouldFilter())
    }

    private fun context(): RequestContext {
        val context = RequestContext()
        context.request = request
        RequestContext.testSetCurrentContext(context)
        return context
    }
}
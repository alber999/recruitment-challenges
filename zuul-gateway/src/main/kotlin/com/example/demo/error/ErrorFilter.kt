package com.example.demo.error

import com.fasterxml.jackson.databind.ObjectMapper
import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext
import com.netflix.zuul.exception.ZuulException
import org.slf4j.LoggerFactory
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.stereotype.Component

@Component
class ErrorFilter : ZuulFilter() {

    companion object {
        private const val FILTER_ORDER: Int = -1
        private const val THROWABLE_KEY = "throwable"
    }

    private val log = LoggerFactory.getLogger(ErrorFilter::class.java)

    override fun filterType(): String = FilterConstants.ERROR_TYPE

    override fun filterOrder(): Int = FILTER_ORDER

    override fun shouldFilter(): Boolean = true

    override fun run(): Any? {
        val context = RequestContext.getCurrentContext()
        val throwable = context[THROWABLE_KEY]

        if (throwable is ZuulException) {
            log.error("Zuul internal error: ${throwable.errorCause}: ${throwable.message}")

            val reasonPhrase = HttpStatus.valueOf(throwable.nStatusCode).reasonPhrase

            context.remove(THROWABLE_KEY)
            context.responseBody = ObjectMapper().writeValueAsString(Error(
                    timestamp = System.currentTimeMillis(),
                    status = throwable.nStatusCode,
                    error = reasonPhrase,
                    message = reasonPhrase
            ))
            context.response.contentType = MediaType.APPLICATION_JSON_VALUE
            context.responseStatusCode = throwable.nStatusCode
        }
        return null
    }
}
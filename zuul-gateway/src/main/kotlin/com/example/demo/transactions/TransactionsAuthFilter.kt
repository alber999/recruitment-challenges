package com.example.demo.transactions

import com.example.demo.credentials.Base64Credentials
import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest

@Component
class TransactionsAuthFilter @Autowired constructor(
        private val serviceProperties: TransactionsProperties
) : ZuulFilter() {

    companion object {
        private const val SERVICE_ID: String = "transactions"
        private const val FILTER_ORDER: Int = 1
        private const val AUTH_HEADER: String = "Authorization"
        private const val AUTH_TYPE: String = "Basic"
    }

    private val log = LoggerFactory.getLogger(TransactionsAuthFilter::class.java)

    override fun filterType(): String = FilterConstants.PRE_TYPE

    override fun filterOrder(): Int = FILTER_ORDER

    override fun shouldFilter(): Boolean = "/$SERVICE_ID" == context().request.servletPath

    override fun run(): Any? {
        val context = context()
        context.addZuulRequestHeader(AUTH_HEADER, authorizationHeader())
        log.info(requestInfo(context.request))
        return null
    }

    private fun context(): RequestContext = RequestContext.getCurrentContext()

    private fun authorizationHeader(): String =
            "$AUTH_TYPE ${Base64Credentials(
                    username = serviceProperties.username,
                    password = serviceProperties.password).encode()}"

    private fun requestInfo(request: HttpServletRequest): String {
        val message = "Auth header added: (${request.method}) ${request.requestURL}"
        if (null != request.queryString) {
            return "$message?${request.queryString}"
        }
        return message
    }
}
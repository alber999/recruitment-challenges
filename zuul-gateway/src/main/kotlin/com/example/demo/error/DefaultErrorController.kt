package com.example.demo.error

import org.slf4j.LoggerFactory
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping


@Controller
class DefaultErrorController : ErrorController {

    companion object {
        private val ERROR = HttpStatus.SERVICE_UNAVAILABLE
    }

    private val log = LoggerFactory.getLogger(DefaultErrorController::class.java)

    @RequestMapping("/error", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun error(): ResponseEntity<Error> {
        log.error("Generic error")
        return ResponseEntity.status(ERROR).body(Error(
                timestamp = System.currentTimeMillis(),
                status = ERROR.value(),
                error = ERROR.reasonPhrase,
                message = ERROR.reasonPhrase
        ))
    }


    override fun getErrorPath(): String = "/error"
}

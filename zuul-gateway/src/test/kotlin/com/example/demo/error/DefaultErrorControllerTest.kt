package com.example.demo.error

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test

class DefaultErrorControllerTest {

    @Test
    fun error() {
        val error = DefaultErrorController().error().body
        Assertions.assertEquals(503, error!!.status)
        Assertions.assertEquals("Service Unavailable", error.error)
        Assertions.assertEquals("Service Unavailable", error.message)
    }
}
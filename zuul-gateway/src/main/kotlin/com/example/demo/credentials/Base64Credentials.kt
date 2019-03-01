package com.example.demo.credentials

import java.util.*

data class Base64Credentials(
        val username: String,
        val password: String
) {
    init {
        if (username.isEmpty()) {
            throw IllegalArgumentException("username cannot be empty")
        }

        if (password.isEmpty()) {
            throw IllegalArgumentException("password cannot be empty")
        }
    }

    fun encode(): String =
            String(Base64.getEncoder().encode("$username:$password".toByteArray()))
}
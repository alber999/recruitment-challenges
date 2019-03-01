package com.example.demo.credentials

import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test

class Base64CredentialsTest {

    @Test
    fun encode() {
        Assertions.assertEquals(
                "dXNlcm5hbWU6cGFzc3dvcmQ=",
                Base64Credentials(username = "username", password = "password").encode()
        )
    }

    @Test
    fun encodeEmptyUsername() {
        Assertions.assertThrows(IllegalArgumentException::class.java) {
            Base64Credentials(username = "", password = "password").encode()
        }
    }

    @Test
    fun encodeEmptyPassword() {
        Assertions.assertThrows(IllegalArgumentException::class.java) {
            Base64Credentials(username = "username", password = "").encode()
        }
    }
}
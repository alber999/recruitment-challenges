package com.example.demo

import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.reactive.server.WebTestClient
import java.time.Duration

@ExtendWith(SpringExtension::class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApplicationIntegrationTest {

    @Autowired
    private lateinit var client: WebTestClient


    @BeforeAll
    fun setUp() {
        client = client
                .mutate()
                .responseTimeout(Duration.ofMillis(15000))
                .build()
    }

    @Test
    fun request() {
        client.get()
                .uri("/transactions")
                .accept(MediaType.ALL)
                .exchange()
                .expectStatus().isOk
    }

    @Test
    fun requestWithParams() {
        client.get()
                .uri("/transactions?action=payment&currencyCode=EUR")
                .exchange()
                .expectStatus().isOk
    }
}

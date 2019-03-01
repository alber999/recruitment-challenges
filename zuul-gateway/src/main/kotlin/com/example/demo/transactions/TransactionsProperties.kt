package com.example.demo.transactions

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component
import org.springframework.validation.annotation.Validated
import javax.validation.constraints.NotBlank

@Component
@ConfigurationProperties(prefix = "service.transactions")
@Validated
class TransactionsProperties {

    @NotBlank
    lateinit var username: String

    @NotBlank
    lateinit var password: String
}
package com.example.demo.error

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonProperty

@JsonInclude(JsonInclude.Include.NON_NULL)
data class Error(

        @JsonProperty("timestamp")
        val timestamp: Long,

        @JsonProperty("status")
        val status: Int,

        @JsonProperty("error")
        val error: String,

        @JsonProperty("message")
        val message: String
)
package com.example.demo.cors

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component
import org.springframework.validation.annotation.Validated
import javax.validation.constraints.NotEmpty

@Component
@ConfigurationProperties(prefix = "cors")
@Validated
class CorsProperties {

    @NotEmpty
    lateinit var origins: List<String>
}

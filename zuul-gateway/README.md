# Challenge

[Challenge description](https://github.com/payvision-development/recruitment-challenges/tree/fullstack-engineer)

# Zuul gateway

This repository contains a Netflix Zuul based service implemented on Spring Boot 2 _reactive_ as a part of the challenge solution. To see _High Level System_ description go [here](./../README.md)

# Commands

**Gradle** is the application dependency manager. To run application lifecycle tasks, run from current directory:

| command | description |
| :----- | :------- |
| `./gradlew clean` | Clean build files |
| `./gradlew build` | Build Project |
| `./gradlew test` | Run unit tests |
| `./gradlew integration` | Run integration tests |
| `./gradlew bootRun` | Run the application |

# Requirements

Java 8 installed

```
$ java -version
java version "1.8.0_171"
Java(TM) SE Runtime Environment (build 1.8.0_171-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.171-b11, mixed mode)
```

# Getting started

Run `./gradlew test integration` command to make sure everything works ok, then, run the application `./gradlew bootRun`

Check in browser: http://localhost:9999/transactions

or run curl command:

```
curl -v http://localhost:9999/transactions
```

# Development environment

* MacOS 10.14.3
* Spring Boot 2.1.3
* Kotlin 1.2.71
* Gradle 4.10.2
* JUnit 5
* Mockito 2
* IntelliJ

# Project scaffolding

```
src/
   integration/
      kotlin/com.example.demo/
   main/
      kotlin/com.example.demo/
      resources/
         application.yml
   test/
      kotlin/com.example.demo/
.gitignore
build.gradle
gradlew
gradlew.bat
integration.gradle
README.md
settings.gradle
test.gradle
```

Gradle configuration files:

* **build.gradle**: Main configuration and dependencies
* **test.gradle**: Unit tests configuration
* **integration.gradle**: Integration tests configuration

Source files:

* **src/main/kotlin**: Application source files
* **src/test/kotlin**: Unit tests source files
* **src/integration/kotlin**: Integration tests source files

Configuration files:

* **src/main/resources/application.yml**: Application configuration

# Application properties

| property | description | sample value |
| :------- | :---------- | :----------- |
| spring.application.name | application name | gateway |
| server.port | HTTP port where application is listening | 9999 |
| zuul.sensitiveHeaders | HTTP headers too sensitive to be passed on to the downstream applications | Cookie,Set-Cookie |
| zuul.ignored-headers | HTTP headers that are totally ignored once traffic reaches Zuul, when sending traffic to downstream and from the response of the downstream services | Access-Control-Allow-Credentials, Access-Control-Allow-Origin |
| zuul.routes.transactions.path | zuul gateway endpoint for transactions | /transactions/** |
| zuul.routes.transactions.url | transactions endpoint url to be routed when zuul gateway endpoint is reached | https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions |
| cors.origins | List of cross origins allowed by zuul gateway  | - http://localhost:4200 |
| service.transactions.username | Transactions endpoint HTTP Basic Auth username | username |
| service.transactions.password | Transactions endpoint HTTP Basic Auth password | password |

# Main features

This is an implementation for a challenge, so default namespace (`com.example.demo`) from Spring starter (https://start.spring.io/) was not modified.

* Execution based on Gradle dependency manager

* Default standard output logging configuration

* Default configuration YML properties defined in main resources

* Properties handlers with validation annotations preventing application to start if invalid properties values

* `TransactionsAuthFilter` extending `ZuulFilter` to add HTTP Basic Auth header with configured credentials

* `ErrorFilter` extending `ZuulFilter` to handle Zuul Exceptions and return Error serialized (json)

* `DefaultErrorController` extending `ErrorController` to handle generic errors and return Error serialized (json)

* Unit and integration tests implemented

# Error response

Following sample describes JSON error response format

```
{
   "timestamp": 1552316178372,
   "status": 503,
   "error": "Service Unavailable",
   "message": "Service Unavailable"
}
```

# Challenge

[Challenge description](https://github.com/payvision-development/recruitment-challenges/tree/fullstack-engineer)

# Webapp

This repository contains a client web application implemented on Angular 7.3.3 as a part of the challenge solution. To see _High Level System_ description go [here](./../README.md)

# Commands

**NPM** is the application dependency manager. To run application lifecycle tasks, run from current directory:

| command | description |
| :----- | :------- |
| `npm install` | Install dependencies |
| `npm start` | Run application in dev mode |
| `npm run start:prod` | Run application in prod mode |
| `npm build` | Build application |
| `npm run lint` | Run lint checks |
| `npm test` | Run unit tests |
| `npm run e2e` | Run end to end tests |

# Requirements

Node installed

```
$ node -v
v11.10.0
```

NPM installed

```
$ npm -v
6.7.0
```

Angular-CLI installed

```
$ ng --version
Angular CLI: 7.3.3
```

# Getting started

Clone this repository

```
git clone git@github.com:alber999/recruitment-challenges.git
```

Switch to challenge branch

```
cd recruitment-challenges
git checkout fullstack-engineer
```

Enter web app directory

```
cd webapp
```

Run `npm install` to install dependencies

First run gateway service, needed for end to end tests and application. See how to [here](./../zuul-gateway) 

Run `npm test` and `npm run e2e` command to make sure everything works ok, then, run `npm start` to run app in _dev_ mode, or `npm run start:prod` in _prod_ mode


# Development environment

* MacOS 10.14.3
* Node 11.10.0
* NPM 6.7.0
* Angular-CLI 7.3.3
* Angular 7.2.7
* Material Design
* Protractor for e2e tests
* Jasmine 2.99
* Karma 4.0

# Project design

This application has been designed following FLUX Architecture. See [Facebook Flux overview](https://facebook.github.io/flux/docs/in-depth-overview.html) for more info
 
There are 3 main features

* loading
* notification
* transaction

All features implemented in Angular modules. Let's see a short review of all features

## Flux architecture

Architecture implemented with support of rxjs Observables allowing reactive and asynchronous data flows and complete component uncoupling

## Loading

Loading indicator whenever an XHTTP request is executed. Implemented on angular HttpInterceptor

## Notification

Only error notifications implemented covering application requirements. UI notifications for user whenever an XHTTP request fails. Notification shown for 3 seconds unless user closes it. Implemented on angular HttpInterceptor

## Transaction

Module gathering all transactions data management and visualization related features


# User Interface

Responsive UI implemented on Material Design angular components, angular animations and SASS defining variables/mixins for main UI colors and fonts

# Project scaffolding

```
e2e/
    src/
src/
   app/
      component/
      app.module.ts
      rxjs.operators.ts
   environments/
   lib/
   modules/
      flux/
      loading/
      notification/
      transaction/
   _mixins.scss
   _variables.scss
   styles.scss
   main.ts
package.json
README.md
```

Tests located alongside source code as well as html and scss files in components

End to end tests:

* **e2e/src**: End to end tests based on page objects

App:

* **src/app**: Main app module and component

Modules:

* **src/modules**: Contains 4 application angular modules

Generic support:

* **src/lib**: Utilities code

Configuration files:

* **src/environments**: Default angular envs defined having application properties

# Application properties

| property | description | sample value |
| :------- | :---------- | :----------- |
| endpoints.transaction | Transaction service endpoint | http://localhost:9999 |

# Final thoughts

This is an implementation for a challenge with a single main feature: show transactions

* Default base route is enough to cover requirements

* No user authentication implemented

* No i18n support added

* No HTTP caching added

* No support for PWA added

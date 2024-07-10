

## Description

Inventory Service

## Docker setup

```bash
$ docker-compose up -d
```

This will spin up a Docker application and a mongodb database
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running the app

### add an inventory item

Create an inventory record by making a `POST` request to the endpoint below.

```
POST /inventory

{
  "level": 10
}
```

### update an inventory item

Create an inventory record by making a `PUT` request to the endpoint below.


```
PUT /inventory/:id

{
  "level": 10
}
```
## Swagger Docs

Access the swagger docs for the endpoints on the endpoint below.

```
/docs
```

## Webhook

Creating and/or updating an inventory record will send a webhook request to the endpoint below.

```
https://webhook.site/#!/view/a5d631c4-fe61-4ba6-8502-6a3327c294f1/9b07e42c-dee7-4566-a92c-e8f849d23769/1
```


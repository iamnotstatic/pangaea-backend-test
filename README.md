# API Documentation

<a href="#"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://github.com/iamnotstatic/pat-test/blob/master/reports/index.html">![coverage](https://img.shields.io/badge/coverage-75%25-yellowgreen)</a>


This API uses `POST` and `GET` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.

## Package for API Authentication

Laravel Passport for API authentication https://github.com/laravel/passport

## Documentation URL

https://patricia-test-example.herokuapp.com/api/documentation

## APP URL

https://patricia-test-example.herokuapp.com

## Response Codes

### Response Codes

```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity
50X: Server Error
```

### Error Codes Details

```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```

## Register

**You send:** Your Registration datail.
**You get:** An `API-Token` with wich you can make further actions.

**Request:**

```json
POST /api/v1/register HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "name": "foo",
    "email": "example",
    "password": "1234567",
    "password_confirmation": "1234567"
}
```

**Successful Response:**

```json
HTTP/1.1 201 Created
Server: My RESTful API
Content-Type: application/json

{
    "data": {
        "status": true,
        "message": "Account created successfully!",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOWZmMzVjNzA3ZGI5NGJmMmIyNzQ5MzczMWM1Yjg3MzRlOTBmN2RhN",
        "token_type": "Bearer"
    }
}
```

**Failed Response:**

```json
HTTP/1.1 400 Bad Request
Server: RESTful API
Content-Type: application/json

{
    "message": "Validation errors",
    "errors": {
        "email": [
            "The email has already been taken."
        ]
    },
    "status": false
}
```

## Login

**You send:** Your login credentials.
**You get:** An `API-Token` with wich you can make further actions.

**Request:**

```json
POST /api/v1/login HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "username": "foo",
    "password": "1234567"
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK
Server: My RESTful API
Content-Type: application/json

{
    "data": {
        "status": true,
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMzAxY2VlMGM2ODk4NWE3ZDY5NzZiMzMxM2ZhZDI1ZDk2ODFiMzg0MWVmODc0MzExNDkzZjMyMDZhMDNiMzI0Z",
        "token_type": "Bearer"
    }
}
```

**Failed Response:**

```json
HTTP/1.1 401 Unauthorized
Server: RESTful API
Content-Type: application/json

{
    "error": "Invalid Credentials",
    "status": false
}
```

## Get User Details

**You send:** Your Pass the Authorization Token as Header to authenticate.
**You get:** User details.

**Request:**

```json
POST /api/v1/user/data HTTP/1.1
Accept: application/json
Content-Type: application/json

```

**Successful Response:**

```json
HTTP/1.1 200 OK
Server: RESTful API
Content-Type: application/json

{
    "user": {
        "id": 11,
        "name": "example",
        "email": "example@gmail.com",
        "last_logged_in": "2020-09-22 19:16:11",
        "created_at": "2020-09-22T17:55:47.000000Z",
        "updated_at": "2020-09-22T19:16:11.000000Z"
    },
    "success": true
}
```

**Failed Response:**

```json
HTTP/1.1 401 Unauthorized
Server: RESTful API
Content-Type: application/json

Unauthorized.
```

## Logout

**You send:** Your Pass the Authorization Token as Header to authenticate.
**You get:** Logout Message.

**Request:**

```json
POST /api/v1/logout HTTP/1.1
Accept: application/json
Content-Type: application/json

```

**Successful Response:**

```json
HTTP/1.1 200 OK
Server: RESTful API
Content-Type: application/json

{
    "message": "Successfully logged out",
    "succes": true
}
```

**Failed Response:**

```json
HTTP/1.1 401 Unauthorized
Server: RESTful API
Content-Type: application/json

Unauthorized.
```

## To run the Test

### Register

```php
vendor/bin/phpunit --filter=testNewUserRegistration
```

### Login

```php
vendor/bin/phpunit --filter=testUserLogin
```

### Get User Data

```php
vendor/bin/phpunit --filter=testGetUserData
```

### Log User Out

```php
vendor/bin/phpunit --filter=testLogUserOut
```

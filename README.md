# Pangaea Backend Takehome


This API uses `POST` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must be valid JSON.

## Packages Used

Redis https://www.npmjs.com/package/redis

Express https://www.npmjs.com/package/express

Axios https://www.npmjs.com/package/axios


## How to run the program

```
npm install

node src/subscriberServer.js - Start the subscriber server

node src/publisherServer.js - Start the publisher server
```

### Response Codes

```
200: Success
201: Created
```


## Publish a topic

**You send:** Message and topic name.

**You get:** Success and message.

**Request:**

```json
POST /publish/{topic} HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "msg": "Helle World"
}
```

**Successful Response:**

```json
HTTP/1.1 201 Created
Server: RESTful API
Content-Type: application/json

{
    "success": true,
    "message": "published successfully"
}

```


## Subscriber to a topic

**You send:** Topic and endpoint(url).

**You get:** Url and topic.

**Request:**

```json
POST /subscribe/{topic} HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "url": "http://mysubscriber.test"
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK
Server: RESTful API
Content-Type: application/json

{
    "url": "http://mysubscriber.test",
    "topic": "topic1"
}
```


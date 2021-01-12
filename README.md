# Pangaea Backend Takehome


This API uses `POST` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must be valid JSON.

## Packages Used

Redis https://www.npmjs.com/package/redis

Express https://www.npmjs.com/package/express

Axios https://www.npmjs.com/package/axios


## How to run the servers

### Windows OS
```
./start-server.sh 
```


### Mac OS
```
sh start-server.sh
```


## Publish a topic
Run the below command on your terminal
```terminal
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
```


## Subscribe to a topic
Run the below command on your terminal
```terminal
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:9000/test1"}' http://localhost:8000/subscribe/topic1
```


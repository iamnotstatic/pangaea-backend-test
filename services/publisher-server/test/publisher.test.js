const request = require('supertest');
const app = require('../app');

test("should publish topic", async () => {
    await request(app)
    .post('/publish/topic1')
    .send({message: "hello"})
    .expect(201);
});

test("should subscribe to topic", async () => {
    await request(app)
    .post('/subscribe/topic1')
    .send({url: "http://localhost:3001/test2"})
    .expect(201);
});
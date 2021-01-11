const request = require('supertest');
const app = require('../app');

test("should subscribe to topice", async () => {
    await request(app)
        .post('/subscribe/topic1')
        .send({ "url": "https://jsonplaceholder.typicode.com/todos"})
        .expect(01);
});
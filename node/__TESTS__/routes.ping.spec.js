const request = require('supertest');
const app = require('../app');

const itif = (condition) => condition ? it : it.skip;

describe('GET /ping ', () => {
  itif(process.env.JEST_ALLOW_INTEG == true)('It should respond with a message of "PONG"', async () => {
    const response = await request(app).get('/ping');
    expect(response.body).toEqual({ message: "PONG"}),
    expect(response.statusCode).toBe(200);
  });
});

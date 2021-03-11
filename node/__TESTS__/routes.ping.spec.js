const request = require('supertest');
const app = require('../app');

describe('GET /ping ', () => {
    test('It should respond with a message of "PONG"', async () => {
      const response = await request(app).get('/ping');
      expect(response.body).toEqual({ message: "PONG"}),
      expect(response.statusCode).toBe(200);
    });
  });
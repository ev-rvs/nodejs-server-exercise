const request = require('supertest');
const app = require('../app');

const desiredResponse = {
  message: 'PING',
  pingCount: expect.any(Number),
};

describe('GET /pong ', () => {
  test('It should respond with a message of "PING" and pingCount: NUMBER', async () => {
    const response = await request(app).get('/pong');
    expect(response.body).toMatchObject(desiredResponse),
    expect(response.statusCode).toBe(200);
  });
});

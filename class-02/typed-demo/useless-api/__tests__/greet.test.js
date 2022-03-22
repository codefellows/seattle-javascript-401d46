'use strict';

const supertest = require('supertest');
const server = require('../app.js');
const request = supertest(server.app);

describe('Testing the useless API', () => {

  test('API should responde with a 200 on POST to /greet/:person if a text property exists on the request', async () => {

    const response = await request.post('/greet/Jacob').send({
      text: 'Hello',
    });

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello Jacob');
  });

  test('API should respond with a 400 when no text body is present', async () => {
    const response = await request.post('/greet/Jacob');

    expect(response.status).toEqual(400);
    expect(response.text).toEqual('no request body present');
  });
});

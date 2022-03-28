'use strict';

const { app, sequelize } = require('../server/server.js');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing our auth features', () => {

  it('Should allow users to signup, with a POST to `signup', async () => {
    let response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'supersecret',
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Jacob');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('supersecret');
  });

  it('should not allow unauthenticated request to /Users', async () => {
    let response = await request.get('/users');

    expect(response.status).toEqual(401);
    expect(response.text).toEqual('Unauthorized');
  });

  it ('should allow an authenticated header through', async () => {
    let authString = 'Jacob:supersecret';
    let encodedString = base64.encode(authString);
    let response = await request.get('/users').set('Authorization', `Basic ${encodedString}`);

    expect(response.status).toEqual(200);
    expect(response.body[0].username).toEqual('Jacob');
  });
});

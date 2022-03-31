'use strict';

process.env.SECRET = 'secretstring';

const { db } = require('../src/auth/models');
const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);
const base64 = require('base-64');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Auth Routes Tests', () => {
  it('should create a user', async () => {
    let response = await request.post('/signup').send({
      username: 'admin',
      password: 'password',
    });

    expect(response.status).toEqual(201);
    expect(response.body.token).toBeTruthy();
  });

  it('should allow a valid user to log in', async () => {
    let authString = 'admin:password';
    let encodedString = await base64.encode(authString);
    let response = await request.post('/signin').set('Authorization', `Basic ${encodedString}`);

    expect(response.status).toEqual(200);
    expect(response.body.user.username).toEqual('admin');
  });

});

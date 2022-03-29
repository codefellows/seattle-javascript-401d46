'use strict';

// const {  app, sequelize } = require('../src/app.js');
const { app } = require('../src/server.js');
const { sequelize } = require('../src/auth/models/user.schema.js');
const base64 = require('base-64');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');
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
      username: 'micha',
      password: 'ineffable',
    });

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('micha');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('ineffable');
    expect(response.body.token).toBeTruthy();
  });

  it('should allow a user to `signin` with the correct password', async () => {
    let authString = 'micha:ineffable';
    let encodedString = base64.encode(authString);
    let response = await request.post('/signin').set('Authorization', `Basic ${encodedString}`);

    console.log(response.error);
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('micha');
    expect(response.body.token).toBeTruthy();
  });

  it('Should allow a user to authenticate a request using a token', async () => {
    let authString = 'micha:ineffable';
    let encodedString = base64.encode(authString);
    let response = await request.post('/signin').set('Authorization', `Basic ${encodedString}`);

    let token = response.body.token;

    response = await request.get('/users').set('Authorization', `Bearer ${token}`);
    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(1);
    expect(response.body.results[0].username).toEqual('micha');
  });
});

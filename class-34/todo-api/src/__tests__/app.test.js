'use strict';

const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Testing the Express app', () => {

  let username = 'test_user';
  let password = 'test_password';

  test('Should register a user', async () => {
    const response = await request.post('/signup').send({
      username,
      password,
    });

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual(username);
    expect(response.body.role).toEqual('user');
    expect(response.body.token).toBeTruthy();
  });

  test('Should sign in a user with basic auth credentials', () => {

    const response = await request.post('/signin').auth(username, password);

    expect(response.status).toBe(200);
    expect(response.body.username).toEqual(username);
    expect(response.body.role).toEqual('user');
    expect(response.body.token).toBeTruthy();
  });
});

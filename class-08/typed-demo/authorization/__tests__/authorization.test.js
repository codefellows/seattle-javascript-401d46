'use strict';

const { users, sequelize } = require('../server/models');
const supertest = require('supertest');
const { app } = require('../server/app.js');
const request = supertest(app);

let testUser;

beforeAll(async () => {
  await sequelize.sync();
  testUser = await users.create({ username: 'Jacob', password: 'test'});
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing authorized routes', () => {

  test('User should be authorized to read', async () => {
    let response = await request.get('/articles').set('Authorization', `Bearer ${testUser.token}`);

    expect(response.status).toEqual(200);
    expect(response.body.results.length).toBeTruthy();
  });

  test('User should NOT be authorized to create', async () => {
    let response = await request.post('/articles').set('Authorization', `Bearer ${testUser.token}`);

    expect(response.status).toEqual(403);
    expect(response.text).toEqual('Not Authorized');
  });
});


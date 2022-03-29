'use strict';

const { Users, sequelize } = require('../src/auth/models/user.schema.js');
const jwt = require('jsonwebtoken');

const SECRET = process.env.API_SECRET || 'secretfortoken';

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing the user model', () => {

  test('User should have token', async () => {
    const testUser = await Users.create({ username: 'Jacob', password: 'supersecret' });
    const { token } = testUser; // setter runs and its return is used
    const validToken = jwt.verify(token, SECRET);

    expect(token).toBeTruthy();
    expect(validToken).toBeTruthy();
  });
});

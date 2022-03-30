'use strict';

const { users, sequelize } = require('../server/models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the User Model', () => {

  test('User should have a role, and list of capabilities', async () => {
    let testUser = await users.create({ username: 'Jacob', password: 'test'});

    let testWriter = await users.create({ username: 'Ryan', password:  'secret', role: 'writer'});

    expect(testUser.role).toEqual('user');
    expect(testWriter.role).toEqual('writer');
    expect(testUser.capabilities).toBeTruthy();
    expect(testUser.capabilities.includes('read')).toEqual(true);
    expect(testWriter.capabilities).toBeTruthy();
    expect(testWriter.capabilities.includes('create')).toEqual(true);
  });

});

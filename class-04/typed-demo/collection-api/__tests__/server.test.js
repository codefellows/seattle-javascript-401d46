'use strict';

const supertest = require('supertest');
const { sequelize, funkoCollection } = require('../collection');
const { app } = require('../server/app.js');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing our REST API', () => {
  test('Should delete a funko', async () => {
    // what should I test?

    // create test data
    let testFunko = await funkoCollection.create({
      name: 'test funko',
      number: 100,
      collection: 'test',
      condition: 'test',
    });

    let response = await request.delete(`/funko/${testFunko.id}`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test funko');
    expect(response.body.number).toEqual(100);
    expect(response.body.collection).toEqual('test');
    expect(response.body.condition).toEqual('test');
  });
});

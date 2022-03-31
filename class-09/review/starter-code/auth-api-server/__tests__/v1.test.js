'use strict';

const { db, food, clothes } = require('../src/models');
const { server } = require('../src/server');
const supertest = require('supertest');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const request = supertest(server);

beforeAll(async () => {
  await db.sync();
  await food.create({
    name: 'lardfruit',
    calories: 1000000,
    type: 'fruit',
  });
  await clothes.create({
    name: 'The Mediumest Shirt',
    color: 'Medium Gray',
    size: 'XX-M',
  });
});

afterAll(async () => {
  await db.drop();
});


describe('V1 Route Tests', () => {
  it('should reject a bad model path', async () => {
    let response = await request.get('/api/v1/bicycles');

    expect(response.statusCode).toEqual(500);
    expect(response.body.message).toEqual('Invalid Model');
  });

  it('should send a 404 error for a bad path', async () => {
    let response = await request.get('/bicycles');

    console.log(response.body);
    expect(response.statusCode).toEqual(404);
  });

  describe('GET all', () => {
    it('should get all records of the food model', async () => {
      let response = await request.get('/api/v1/food');

      expect(response.status).toEqual(200);
      expect(response.body[0].name).toEqual('lardfruit');
    });

    it('should get all records of the clothes model', async () => {
      let response = await request.get('/api/v1/clothes');

      expect(response.status).toEqual(200);
      expect(response.body[0].name).toEqual('The Mediumest Shirt');
    });
  });

  describe('GET one', () => {
    it('should get one record from the food model', async () => {
      let response = await request.get('/api/v1/food/1');

      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('lardfruit');
    });

    it('should get one record from the clothes model', async () => {
      let response = await request.get('/api/v1/clothes/1');

      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('The Mediumest Shirt');
    });
  });

  describe('POST one', () => {
    it('should post one record to the food model', async () => {
      let response = await request.post('/api/v1/food').send({
        name: 'tofudabeast',
        calories: 100,
        type: 'protein',
      });

      expect(response.status).toEqual(201);
      expect(response.body.name).toEqual('tofudabeast');
    });

    it('should post one record to the clothes model', async () => {
      let response = await request.post('/api/v1/clothes').send({
        name: 'one left shoe',
        color: 'plaid',
        size: '5',
      });

      expect(response.status).toEqual(201);
      expect(response.body.name).toEqual('one left shoe');
    });
  });

  describe('PUT one', () => {
    it('should update one record of the food model', async () => {
      let response = await request.put('/api/v1/food/1').send({
        name: 'tofuda-beast',
        calories: 1000,
        type: 'protein',
      });

      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('tofuda-beast');
    });

    it('should update one record of the clothes model', async () => {
      let response = await request.put('/api/v1/clothes/1').send({
        name: 'one right shoe',
        color: 'plaid',
        size: '5.5',
      });

      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('one right shoe');
    });
  });

  describe('DELETE one', () => {
    it('should delete one record from the food model', async () => {
      let response = await request.delete('/api/v1/food/1');
      console.log(response.body);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(1);
    });

    it('should delete one record from the clothes model', async () => {
      let response = await request.delete('/api/v1/clothes/1');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(1);
    });
  });
});

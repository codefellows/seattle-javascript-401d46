'use strict';

const { db, food, clothes } = require('../src/models');
const { users } = require('../src/auth/models/index');
const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);
const auth = require('../src/auth/models');

let testUserData = {
  admin: {
    username: 'admin',
    password: 'password',
    role: 'admin',
  },
  writer: {
    username: 'writer',
    password: 'password',
    role: 'writer',
  },
  editor: {
    username: 'editor',
    password: 'password',
    role: 'editor',
  },
  user: {
    username: 'user',
    password: 'password',
    role: 'user',
  },
};

const testUsers = [];

beforeAll(async () => {
  await db.sync();
  await auth.db.sync();
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

  await buildUsers();
});

afterAll(async () => {
  await db.drop();
  await auth.db.drop();
});

async function buildUsers() {
  let testAdmin = await users.create({
    username: 'admin',
    password: 'password',
    role: 'admin',
  });
  let testWriter = await users.create({
    username: 'writer',
    password: 'password',
    role: 'writer',
  });
  let testEditor = await users.create({
    username: 'editor',
    password: 'password',
    role: 'editor',
  });
  let testUser = await users.create({
    username: 'user',
    password: 'password',
    role: 'user',
  });

  testUsers.push(testUser);
  testUsers.push(testWriter);
  testUsers.push(testEditor);
  testUsers.push(testAdmin);
}


describe('V2 Route Tests', () => {

  describe('User Tests', () => {

    it('should authorize a user to read', async () => {
      let response = await request.get('/api/v2/food').set('Authorization', `Bearer ${testUsers[0].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.length).toBeTruthy();
    });

    it('should not authorize a user to post', async () => {
      let response = await request.post('/api/v2/food').set('Authorization', `Bearer ${testUsers[0].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

    it('should not authorize a user to put', async () => {
      let response = await request.put('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[0].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

    it('should not authorize a user to delete', async () => {
      let response = await request.delete('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[0].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

  });

  describe('Writer Tests', () => {

    it('should authorize a writer to read', async () => {
      let response = await request.get('/api/v2/food').set('Authorization', `Bearer ${testUsers[1].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.length).toBeTruthy();
    });

    it('should authorize a writer to post', async () => {
      let response = await request.post('/api/v2/food').set('Authorization', `Bearer ${testUsers[1].token}`);

      expect(response.status).toEqual(201);
      expect(response.body.id).toBeTruthy();
    });

    it('should not authorize a writer to put', async () => {
      let response = await request.put('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[1].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

    it('should not authorize a writer to delete', async () => {
      let response = await request.delete('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[1].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

  });

  describe('Editor Tests', () => {

    it('should authorize an editor to read', async () => {
      let response = await request.get('/api/v2/food').set('Authorization', `Bearer ${testUsers[2].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.length).toBeTruthy();
    });

    it('should authorize an editor to post', async () => {
      let response = await request.post('/api/v2/food').set('Authorization', `Bearer ${testUsers[2].token}`);

      expect(response.status).toEqual(201);
      expect(response.body.id).toBeTruthy();
    });

    it('should authorize an editor to put', async () => {
      let response = await request.put('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[2].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.id).toBeTruthy();
    });

    it('should not authorize an editor to delete', async () => {
      let response = await request.delete('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[2].token}`);

      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Access Denied');
    });

  });

  describe('Admin Tests', () => {

    it('should authorize an admin to read', async () => {
      let response = await request.get('/api/v2/food').set('Authorization', `Bearer ${testUsers[3].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.length).toBeTruthy();
    });

    it('should authorize an admin to post', async () => {
      let response = await request.post('/api/v2/food').set('Authorization', `Bearer ${testUsers[3].token}`);

      expect(response.status).toEqual(201);
      expect(response.body.id).toBeTruthy();
    });

    it('should authorize an admin to put', async () => {
      let response = await request.put('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[3].token}`);

      expect(response.status).toEqual(200);
      expect(response.body.name).toBeTruthy();
    });

    it('should authorize an admin to delete', async () => {
      let response = await request.delete('/api/v2/food/1').set('Authorization', `Bearer ${testUsers[3].token}`);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(1);
    });

  });

});

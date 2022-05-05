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

  test('Should create a todo, on POST to /todo', async () => {

    const response = await request.post('/todo').send({
      description: 'New todo',
      assignee: 'test person',
      difficulty: 3,
    });

    expect(response.status).toBe(201);
    expect(response.body.description).toBe('New todo');
    expect(response.body.assignee).toBe('test person');
    expect(response.body.difficulty).toBe(3);
  });

  test('Should read all todos on GET to /todo', async () => {

    const response = await request.get('/todo');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeTruthy();
    expect(response.body[0].description).toBe('New todo');
  });


  test('Should update a todo on PATCH to /todo/:id', async () => {

    const response = await request.patch('/todo/1').send({
      assignee: 'new test person',
    });

    expect(response.status).toBe(200);
    expect(response.body.assignee).toBe('new test person');
    expect(response.body[0].description).toBe('New todo');
  });

  test('Should remove a todo on DELETE to /todo/:id', async () => {

    const response = await request.delete('/todo/1');

    expect(response.status).toBe(204);
    expect(response.body.id).toBe(1);
  });
});

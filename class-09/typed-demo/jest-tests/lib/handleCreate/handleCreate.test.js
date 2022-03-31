'use strict';

const handleCreate = require('./handleCreate.js');

jest.mock('../model', () => {
  return {
    userModel: {
      create: jest.fn((body) => {
        return {...body};
      }),
    },
  };
});

describe('Testing our create handler', () => {

  test('Should create something', () => {
    const req = {
      body: {
        name: 'Jacob',
      },
    };
    const res = {
      send: jest.fn(() => res), // a function spy
      status: jest.fn(() => res),
    };
    const next = jest.fn();


    handleCreate(req, res, next);
    expect(res.send).toHaveBeenCalledWith({ name: 'Jacob' });
  });

  test('Should call error handler', () => {
    const req = {};
    const res = {
      send: jest.fn(() => res), // a function spy
      status: jest.fn(() => res),
    };
    const next = jest.fn();


    handleCreate(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(new Error('Bad Request'));
  });
});

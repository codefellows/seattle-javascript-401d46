'use strict';

const createOrder = require('./');
const eventPool = require('../eventHub.js');

jest.mock('../eventHub.js', () => {
  return {
    emit: jest.fn(),
  };
});

describe('Testing the create order function', () => {
  test('Should publish a pickup order', () => {

    createOrder('test');
    expect(eventPool.emit).toHaveBeenCalledWith(
      'pickup',
      expect.objectContaining({store: 'test'}),
    );
  });
});

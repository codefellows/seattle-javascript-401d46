'use strict';

const handleBrain = require('./handleBrain.js');
const eventPool = require('../eventPool.js');

// path to the module to mock
jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('testing the brain module', () => {

  test('Emits the BRIGHTNESS event', () => {
    handleBrain({ brightness: 50 });
    expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', { brightness: 50 });
  });
});

'use strict';

const handleEyes = require('./handleEyes.js');
const eventPool = require('../eventPool.js');

// path to the module to mock
jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('testing the eye handler', () => {

  console.log = jest.fn();
  // jest.spyOn(console, 'log');

  test('should log message to console, and emit the dilation "close" event', () => {

    handleEyes({brightness: 51});
    expect(console.log).toHaveBeenCalledWith('Brightness changed!! :: ', { brightness: 51 });
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'close');
  });
  test('should log message to console, and emit the DILATION "open" event', () => {

    handleEyes({ brightness: 49 });
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'open');
  });
});

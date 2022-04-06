'use strict';

const MessageClient = require('./');
const { io } =require('socket.io-client');

jest.mock('socket.io-client', () => {
  return {
    io: jest.fn(() => {
      return {
        on: jest.fn(),
        emit: jest.fn(),
      };
    }),
  };
});


describe('Testing the message client module', () => {

  test('should call socket functions on instantiation', () => {
    jest.clearAllMocks();
    let client = new MessageClient('test');
    expect(io).toHaveBeenCalledWith('http://localhost:3000/messages');
    expect(client.socket.emit).toHaveBeenCalledWith('join', {clientId: 'test'});
    expect(client.socket.on).toHaveBeenCalled();
  });

});

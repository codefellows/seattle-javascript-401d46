'use strict';

const { io } = require('socket.io-client');
const Chance = require('chance');
const chance = new Chance();

const socket = io('http://localhost:3000/caps');

socket.emit('getAll', { vendorId: '1-800-flowers', event: 'delivered' });

socket.on('delivered', (payload) => {

  console.log('thanks for delivering', payload.orderId);

  socket.emit('received', {
    event: 'delivered',
    vendorId: payload.vendorId,
    orderId: payload.orderId,
  });
});

socket.emit('pickup', {
  orderId: chance.guid(),
  vendorId: '1-800-flowers',
  customer: chance.name(),
  address: chance.address(),
});

'use strict';

const { io } = require('socket.io-client');
const Chance = require('chance');
const chance = new Chance();
const vendorId = '1-800-flowers';

const caps = io('http://localhost:3000/caps'); // connection event occurs

caps.on('join', (roomId) => {
  console.log('You have joined the room: ', roomId);
});

caps.emit('join', { roomId: vendorId });
caps.emit('pickup', {
  vendorId,
  orderId: chance.guid(),
  customer: chance.name(),
  address: chance.address(),
});

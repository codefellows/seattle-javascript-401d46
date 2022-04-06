'use strict';

const { io } = require('socket.io-client');

const caps = io('http://localhost:3000/caps'); // our driver connects here;

// what does the driver subscribe to? or Publish?
caps.on('join', (roomId) => {
  console.log('You have joined the room: ', roomId);
});
caps.on('pickup', (payload) => {
  caps.emit('join', { roomId: payload.vendorId });

  // what else need to happen?
  console.log(payload);
});

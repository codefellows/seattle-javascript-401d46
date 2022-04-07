'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3000/caps');

socket.emit('getAll', { vendorId: '1-800-flowers', event: 'pickup' });

socket.on('pickup', (payload) => {

  socket.emit('in-transit', payload);
  socket.emit('received', {
    event: 'pickup',
    vendorId: payload.vendorId,
    orderId: payload.orderId,
  });

  setTimeout(() => {
    console.log('driver delivered order', payload.orderId);
    socket.emit('delivered', payload);
  }, 2000);
});

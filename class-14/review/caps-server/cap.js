'use strict';

const { Server } = require('socket.io');

const Queue = require('./lib/Queue');

const server = new Server(3000);
const caps = server.of('/caps');

const pickupQueue = new Queue();
const deliveredQueue = new Queue();

caps.on('connection', (socket) => {

  socket.onAny((event, payload) => {
    console.log(event, payload);
  });

  // what events??
  socket.on('pickup', (payload) => {
    let { vendorId, orderId } = payload;

    let vendorQueue = pickupQueue.read(vendorId);
    if (!vendorQueue) {
      let queueKey = pickupQueue.store(vendorId, new Queue());
      vendorQueue = pickupQueue.read(queueKey);
    }
    vendorQueue.store(orderId, payload);
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('delivered', (payload) => {
    let { vendorId, orderId } = payload;

    let vendorQueue = deliveredQueue.read(vendorId);
    if (!vendorQueue) {
      let queueKey = deliveredQueue.store(vendorId, new Queue());
      vendorQueue = deliveredQueue.read(queueKey);
    }
    vendorQueue.store(orderId, payload);
    socket.broadcast.emit('delivered', payload);
  });

  socket.on('in-transit', (payload) => {
    caps.emit('in-transit', payload);
  });

  // fetch all order from a specific Queue and send each back to the client that published the event.
  socket.on('getAll', ({ vendorId, event }) => {
    let eventQueue = null;
    if (event === 'delivered') {
      eventQueue = deliveredQueue;
    } else if (event === 'pickup') {
      eventQueue = pickupQueue;
    } else {
      console.error('No Queue found');
    }

    let vendorQueue = eventQueue.read(vendorId);
    // for all messages in the selected Queue, send back to the same client
    if (vendorQueue) {
      Object.keys(vendorQueue.data).forEach(orderId => {
        let order = vendorQueue.read(orderId);
        socket.emit(event, order);
      });
    }
  });

  socket.on('received', ({event, orderId, vendorId}) => {
    let eventQueue = null;
    if (event == 'delivered') {
      eventQueue = deliveredQueue;
    } else if (event === 'pickup') {
      eventQueue = pickupQueue;
    } else {
      console.error('No Queue found');
    }

    let vendorQueue = eventQueue.read(vendorId);
    let removedOrder =vendorQueue.remove(orderId);
    socket.broadcast.emit('received', removedOrder);
  });
});

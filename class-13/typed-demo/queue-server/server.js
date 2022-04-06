'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3000;
const Queue = require('./lib/Queue');

const server = new Server(PORT);
const messageQueue = new Queue();
const messages = server.of('/messages');

messages.on('connection', (socket) => {

  socket.onAny((event, payload) => {
    console.log('EVENT :' + event);
    console.log(payload);
  });

  socket.on('join', ({ queueId }) => {
    socket.join(queueId);
    socket.emit('join', queueId);
  });

  socket.on('message', (payload) => {
    // store a message in the queue
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue) {
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    currentQueue.store(payload.messageId, payload);
    messages.emit('message', payload);
  });

  socket.on('received', (payload) => {
    // remove a message from the queue
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue) {
      throw new Error('No queue created for this message');
    }
    let message = currentQueue.remove(payload.messageId);
    messages.emit('received', message);
  });

  socket.on('get-messages', (payload) => {
    // read messages from the queue.
    let currentQueue = messageQueue.read(payload.queueId);

    Object.keys(currentQueue.data).forEach(messageId => {
      // read messages from our Queue, send each on to the intended recepient.
      messages.emit('message', currentQueue.read(messageId));
    });
  });
});

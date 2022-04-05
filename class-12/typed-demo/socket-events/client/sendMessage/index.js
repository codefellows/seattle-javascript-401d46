'use strict';

// curried function to handle dependency injection
module.exports = (socket) => (text) => {
  console.log('Sending Message :: ', text);
  socket.emit('MESSAGE', { text });
};

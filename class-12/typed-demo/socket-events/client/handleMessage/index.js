'use strict';

module.exports = (socket) => (payload) => {
  console.log('Message read! ', payload);
  socket.emit('RECEIVED', payload);
};

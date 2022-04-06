'use strict';

const { Server } = require('socket.io');

const server = new Server(3000); // general server

// how to create the namespace?
const caps = server.of('/caps');


// function handleConnection(events, socket) {
//   for (let event of events) {
//     socket.on(event, (payload) => {
//       socket.broadcast.emit(event, payload);
//     });
//   }
// }

// set up a listener
caps.on('connection', (socket) => {

  // room joining
  socket.on('join', (payload) => {
    socket.join(payload.roomId);
    socket.emit('join', payload.roomId);
  });

  // details of the listener!!
  socket.on('pickup', (payload) => {
    console.log(payload);
    // sending the payload out to any client that is listening for the pickup.
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    caps.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    caps.emit('delivered', payload);
  });
});

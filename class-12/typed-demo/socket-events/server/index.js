'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = new Server(PORT); // Right here we have a listening server listening at: http://localhost:3000/
const caps = server.of('/caps'); // This created a `namespace` off of our server.  same URL just add the endpoint: http://localhost:3000/caps

// stateful communication: there are socket objects on the server, as well as socket objects on the client.
server.on('connection', socket => {
  console.log('Socket connected!!! ' + socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event ', payload);
    // socket.emit('MESSAGE', payload); // send this to the same socket that emitted
    // server.emit('MESSAGE', payload); // to all connected sockets, send the payload.
    socket.broadcast.emit('MESSAGE', payload); // send to all other sockets, besides the sender.
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event ', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});

caps.on('connection', (socket) => {
  console.log('Connection made to CAPS Namespace!', socket.id);

  socket.on('join', (payload) => {
    socket.join(payload.vendorId);
  });

  socket.on('order', (payload) => {
    socket.to(payload.vendorId).emit(payload); // emits to all sockets in the room besides the sender socket.
  });
});

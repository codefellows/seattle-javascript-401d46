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

function logger(event, payload) {
  console.log('Event :: ' + event);
  console.log('timestamp : ', new Date());
  console.log('Payload :: ', payload);
}

// set up a listener
caps.on('connection', (socket) => {

  console.log('SOCKET CONNECTION :: ', socket.id);
  socket.emit('server-connect', {
    id: socket.id,
  });

  // room joining
  socket.on('join', (payload) => {
    socket.join(payload.roomId);
    socket.emit('join', payload.roomId);
  });

  // details of the listener!!
  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    // sending the payload out to any client that is listening for the pickup.
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.to(payload.vendorId).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.to(payload.vendorId).emit('delivered', payload);
  });
});

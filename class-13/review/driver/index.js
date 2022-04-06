'use strict';

const { io } = require('socket.io-client');

const caps = io('http://localhost:3000/caps'); // our driver connects here;

// what does the driver subscribe to? or Publish?
caps.on('join', (roomId) => {
  console.log('You have joined the room: ', roomId);
});
caps.on('server-connect', ({id}) => console.log('You have joined the caps server! id: ' + id));

caps.on('pickup', (payload) => {
  console.log('driver picked up!! ', payload.orderId);
  caps.emit('join', { roomId: payload.vendorId });

  // what else need to happen?
  console.log(payload);
  caps.emit('in-transit', payload);

  setTimeout(() => {
    console.log('driver delivery complete!', payload.orderId);
    caps.emit('delivered', payload);
  }, 2000);
});

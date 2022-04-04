'use strict';

const Events = require('events');

const eventPool = new Events(); // creates a singleton object

// list of client functions
function iPhone() {
  console.log('Sending message');
  eventPool.emit('SEND_MESSAGE', {
    text: 'What are you up to?',
  });
}
function laptop(payload) {
  console.log('message received', payload);
}

eventPool.on('SEND_MESSAGE', laptop);

setInterval(() => {
  iPhone();
}, 3000);

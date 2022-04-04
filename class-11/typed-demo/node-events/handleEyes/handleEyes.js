'use strict';

const eventPool = require('../eventPool.js');

module.exports = (payload) => {
  console.log('Brightness changed!! :: ', payload);
  if (payload.brightness > 50) {
    eventPool.emit('DILATION', 'close');
  } else {
    eventPool.emit('DILATION', 'open');
  }
};

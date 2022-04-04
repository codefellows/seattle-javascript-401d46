'use strict';

const eventPool = require('../eventPool.js');

module.exports = (payload) => {
  eventPool.emit('BRIGHTNESS', payload);
};

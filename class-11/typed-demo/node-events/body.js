'use strict';

const eventPool = require('./eventPool.js');
const brainHandler = require('./handleBrain/handleBrain.js');
const eyeHandler = require('./handleEyes/handleEyes.js');
const pupilHandler = require('./handlePupils/handlePupils.js');

eventPool.on('SUNLIGHT', brainHandler);
eventPool.on('BRIGHTNESS', eyeHandler);
eventPool.on('DILATION', pupilHandler);

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  eventPool.emit('SUNLIGHT', { brightness });
}, 3000);

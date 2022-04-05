'use strict';

const EventEmitter = require('events');

// this is our Singleton for events
const eventPool = new EventEmitter();

module.exports = eventPool;

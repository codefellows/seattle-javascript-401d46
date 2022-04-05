'use strict';

const eventPool = require('./eventHub.js');
const handleDelivery = require('./handleDelivery');
const createOrder = require('./createOrder');

eventPool.on('delivery', handleDelivery); // how to handle this?
createOrder('1-800-flowers'); // what do we do to send an order?

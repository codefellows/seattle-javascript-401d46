'use strict';

const events = require('../eventHub.js');
const Chance = require('chance');
const chance = new Chance();

module.exports = (storename) => {
  const payload = {
    store: storename,
    orderId: chance.guid(),
    customer: chance.name(),
    address: `${chance.city()}, ${chance.state()}`,
  };

  events.emit('pickup', payload);
};

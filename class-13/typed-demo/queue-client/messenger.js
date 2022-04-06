'use strict';

const MessageClient = require('./lib/MessageClient');
const Chance = require('chance');
const chance = new Chance();
const messageQueue = new MessageClient('messages');

messageQueue.publish('message', { messageId: chance.guid(), text: 'hello'});
messageQueue.subscribe('received', console.log);

'use strict';

const MessageClient = require('./lib/MessageClient');

const messageQueue = new MessageClient('messages');

messageQueue.publish('get-messages', { queueId: messageQueue.queueId });

messageQueue.subscribe('message', (payload) => {
  messageQueue.publish('received', payload);
});

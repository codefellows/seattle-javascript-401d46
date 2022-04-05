'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000'); // this only achknowledes a connection, no subscriptions have occured yet.

const handleReceived = require('./client/handleReceived');
const createSendMessage = require('./client/sendMessage'); // import our curried function

const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);
sendMessage('Hey there!');

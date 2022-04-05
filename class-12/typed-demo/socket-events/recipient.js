'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000');

const handleMessage = require('./client/handleMessage')(socket);

socket.on('MESSAGE', handleMessage);

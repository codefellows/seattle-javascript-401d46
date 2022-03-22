'use strict';

require('dotenv').config();
const server = require('./app.js');
const PORT = process.env.PORT || 3000;

server.start(PORT);

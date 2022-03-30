'use strict';

const express = require('express');
const bearerAuth = require('./middlewares/bearer.js');
const authorize = require('./middlewares/authorize.js');

const app = express();

app.get('/articles', bearerAuth, authorize('read'), (req, res) => {
  res.send({ results: ['Here is some article text'] });
});

app.post('/articles', bearerAuth, authorize('create'), (req, res) => {
  res.send({ results: ['Here is a new Article!!'] });
});

module.exports = {
  app,
};

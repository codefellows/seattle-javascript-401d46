'use strict';

const express = require('express');
const handleGreeting = require('./handleGreeting.js');

const app = express();

function logRoute(req, res, next) {
  console.log(req.path);
  console.log(req.ip);
  next(); // we can "trigger" an error by passing a value into next().
}

function sendOkay(req, res, next) {
  res.send('OKAY');
}

function paramHandler(req, res, next) {
  console.log(req.params);
  res.send('You hit a route with a parameter!');
}

function handleQuery(req, res, next) {
  console.log('log from handle query: ', req.query);
  next();
}

function handleError(err, req, res, next) {
  console.log('Log from handleError: ', err);
  res.status(err.status).send(err.message);
}

app.use(express.json());
app.use(logRoute); //  use a provided middleware for all routes

// app.get('/hello', logRoute, sendOkay);
app.get('/hello', handleQuery, sendOkay);

app.get('/hello/:person', handleQuery, paramHandler); // a 'person' is now required for every route

app.post('/greet/:person', handleGreeting);

// error handlers are added at the bottom of the "Routing" file.
app.use(handleError);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on PORT ' + PORT);
    });
  },
};
// app.listen(3000, () => {
//   console.log('App is running');
// });

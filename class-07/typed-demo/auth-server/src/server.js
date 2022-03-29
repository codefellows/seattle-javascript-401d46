'use strict';

const express = require('express');
const authRouter = require('./auth/router/auth.js');
const userRouter = require('./auth/router/users.js');

const app = express();


// configure any middleware

// Where do configure CRUD things?
// hopefully done

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// add routing
app.use(authRouter);
app.use(userRouter);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server up on port :: ', PORT);
    });
  },
};

'use strict';

const { sequelize, PeopleModel } = require('./collection');

sequelize.sync() // that creates all associated tables and makes sure our connection is good to go
  .then(() => {
    console.log('Success!!!');
  })
  .catch(err => {
    console.error(err);
  });

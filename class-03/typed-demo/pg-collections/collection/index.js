'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost:5432/api-app';

const sequelizeInstance = new Sequelize(DATABASE_URL);

sequelizeInstance.sync() // that creates all associated tables and makes sure our connection is good to go
  .then(() => {
    console.log('Success!!!');
  })
  .catch(err => {
    console.error(err);
  });

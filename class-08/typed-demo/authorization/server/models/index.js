'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user.schema.js');

const sequelize = new Sequelize('sqlite::memory');

module.exports = {
  sequelize,
  users: userSchema(sequelize, DataTypes),
};

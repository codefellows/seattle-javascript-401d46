'use strict';

const { db } = require('../../src/auth/models');

module.exports = () => db.drop();

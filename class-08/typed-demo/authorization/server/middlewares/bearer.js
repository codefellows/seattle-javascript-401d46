'use strict';

const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login'); }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateBearer(token);

    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('Invalid Login');
  }
};

'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) {
    res.status(403).send('Invalid Login');
  }

  try {
    let basic = req.headers.authorization.split(' ')[1]; // `basic asdlkfjaosifj`
    let [username, pass] = base64.decode(basic).split(':');

    req.user = await users.authenticateBasic(username, pass);
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('Invalid Login');
  }

};


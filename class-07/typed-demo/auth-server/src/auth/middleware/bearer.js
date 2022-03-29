'use strict';

const { Users } = require('../models/user.schema.js');

module.exports = async (req, res, next) => {

  try {
    let basicHeaderParts = req.headers.authorization.split(' ');
    let token = basicHeaderParts.pop();
    let validUser = await Users.authenticateBearer(token);
    req.user = validUser;
    next();
  } catch(e) {
    console.error(e);
    next(e);
  }

};

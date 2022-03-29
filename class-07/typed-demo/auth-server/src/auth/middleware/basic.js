'use strict';

const base64 = require('base-64');
const { Users } = require('../models/user.schema.js');

module.exports = async (req, res, next) => {
  try {
    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    let validUser = await Users.authenticateBasic(username, password);
    req.user = validUser;
    next();
  } catch(e) {
    console.error(e);
    next(e);
  }
};

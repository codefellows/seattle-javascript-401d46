'use strict';

const { userModel } = require('../model');

module.exports = (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error('Bad Request');
    }
    let userRecord = userModel.create(req.body);

    res.status(201).send(userRecord);
  } catch(e) {
    console.log(e);
    next(e);
  }

};

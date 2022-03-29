'use strict';

const express = require('express');
const { Users } = require('../models/user.schema.js');
const bearerAuth = require('../middleware/bearer.js');

const router = express.Router();

router.get('/users', bearerAuth, async (req, res) => {
  console.log(req.user);
  let users = await Users.findAll({});
  let payload = {
    results: users,
    token: req.user.token,
  };
  res.send(payload);
});


module.exports = router;

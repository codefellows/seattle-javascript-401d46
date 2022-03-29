'use strict';

const express = require('express');
const { Users } = require('../models/user.schema.js');
const basicAuth = require('../middleware/basic.js');

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    console.error(e);
    res.status(403).send('Error Creating User');
  }
});

router.post('/signin', basicAuth, (req, res) => {
  const { user } = req;
  res.status(200).send(user);
});

module.exports = router;

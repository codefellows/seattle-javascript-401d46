'use strict';

const express = require('express');
const { PeopleModel } = require('../../collection');

const router = express.Router();

router.post('/people', async (req, res, next) => {
  let newPersonData = req.body;
  // query to the DB
  let responseData = await PeopleModel.create(newPersonData);
  res.send(responseData);
});

module.exports = router;

'use strict';

const express = require('express');
const { funkoCollection } = require('../collection');

const app = express();

app.delete('/funko/:id', async (req, res, next) => {

  const { id } = req.params;
  let removedFunko = await funkoCollection.delete(id);
  res.send(removedFunko);
});

// how to we make our code accessible to other files / programs?
module.exports = {
  app,
};

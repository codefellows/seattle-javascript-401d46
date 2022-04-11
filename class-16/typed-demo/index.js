'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello from My Simple Express App');
});

app.listen(PORT, () => {
  console.log('Server is up! Using port :: ', PORT);
});

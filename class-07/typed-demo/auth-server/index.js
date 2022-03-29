'use strict';

const { sequelize, app } = require('./src/app.js');

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

'use strict';

function handleGreeting(req, res, next) {

  // does my request have a body with text?
  if (req.body.text) {
    // if so, respond with the body text and the person route parameter
    res.status(200).send(`${req.body.text} ${req.params.person}`);
  } else {
    // if not, send back a 400 with an error message;
    next({ status: 400, message: 'no request body present' });
  }

}

module.exports = handleGreeting;

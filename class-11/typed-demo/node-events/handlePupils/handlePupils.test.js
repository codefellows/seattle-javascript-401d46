'use strict';

const handlePupils = require('./handlePupils.js');

describe('Testing the pupil handler', () => {

  console.log = jest.fn();

  test('Should log "open" for open payload' , () => {
    handlePupils('close');
    expect(console.log).toHaveBeenCalledWith('Dialation Updated!', 'close');
  });
});

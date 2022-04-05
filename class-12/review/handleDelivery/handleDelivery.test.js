'use strict';

const handleDelivery = require('./');

describe('Testing the handle Delivery module', () => {

  jest.spyOn(console, 'log');

  test('Should log a thank you with cusomter name', () => {
    let payload = { customer: 'test customer' };

    handleDelivery(payload);
    expect(console.log).toHaveBeenCalledWith('Thank you, ' + payload.customer);
  });
});

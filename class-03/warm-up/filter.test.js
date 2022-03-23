'use strict';

const filter = require('./filter.js');

describe('Testing the filter method', () => {
  test('Should return an array of even numbers', () => {
    let array = [1, 2, 3, 4];
    let newArray = filter(array, (val, idx) => {
      return !(val % 2);
    });

    expect(newArray).toEqual([2, 4]);
  });
});

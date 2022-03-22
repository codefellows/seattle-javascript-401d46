'use strict';

const map = require('./map.js');

test('Maps over an array of numbers and return a Sum', () => {
  let array = [1, 2, 3, 4];
  let newArray = map(array, (val, idx) => {
    return val * val;
  });

  expect(newArray).toEqual([1, 4, 9, 16]);
});

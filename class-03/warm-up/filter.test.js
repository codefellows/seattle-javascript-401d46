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

  test('Should filter an object', () => {
    let object = { Betty: 'cat', Benny: 'dog', Bowser: 'dog', Roscoe: 'cat'};


    let newObject = filter(object, (val, key) => {
      return val === 'cat';
    });

    expect(newObject).toBe({ Betty: 'cat', Roscoe: 'cat' });
  });
});


// from mdn array.filter
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ }

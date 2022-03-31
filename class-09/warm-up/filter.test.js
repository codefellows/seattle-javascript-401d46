'use strict';

const { LinkedList } = require('./LinkedList.js');

describe('Testing the filter method of our linked list', () => {

  test('should return a new linked list, with values filtered by callback function', () => {

    let list = new LinkedList();

    list.add(4);
    list.add(10);
    list.add(30);

    let filteredList = list.filter((val) => {
      return (val > 10);
    });

    expect(filteredList.head.value).toEqual(30);
    expect(filteredList.head.next).toEqual(null);
  });

});

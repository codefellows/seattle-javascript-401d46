'use strict';

const { LinkedList, Node } = require('./LinkedList.js');

describe('testing the linked list class', () => {

  test('Should be able to add a node to the front of a linked list', () => {


    // instantiate a list with a head;
    let list = new LinkedList();
    list.head = new Node(1);
    expect(list.head.value).toEqual(1);

    // use the add method
    list.add(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next).toEqual({value: 1, next: null});

    expect(list.includes(3)).toEqual(true);
  });
});

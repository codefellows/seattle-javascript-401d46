'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(n) time.
  // O(1) space.
  traverse(cb) {
    let result;
    let current = this.head;

    while(current !== null) { // if truthy we know that current is equal to a node.
      result.push(cb(current.value));
      current = current.next;
    }

    return result;
  }

  // what parameters???
  add(value) {
    let nodeToAdd = new Node(value);
    nodeToAdd.next = this.head;

    this.head = nodeToAdd;
    // if (this.head === null) {
    //   this.head = nodeToAdd;
    // }
  }

  // what parameters?
  includes(value) {
    let current = this.head;
    while(current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

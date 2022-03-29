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

    while(current !== null) {
      result.push(cb(current.value));
      current = current.next;
    }

    return result;
  }

  add(value) {
    let nodeToAdd = new Node(value);
    nodeToAdd.next = this.head;

    this.head = nodeToAdd;
  }

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

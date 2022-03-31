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

  /** JS Docs
   *
   * @param {Function} cb - function to run on reach value in the list
   * @returns {LinkedList} result
   */
  filter(cb) {
    const result = new LinkedList();

    // get through the list to read all values
    let current = this.head;
    while(current) {
      if(cb(current.value)) {
        // if it does add to the new list
        result.add(current.value);
      } // does the callback return true or false?
      // if not, do nothing

      current = current.next;
    }
    return result;
  }
}

module.exports = {
  Node,
  LinkedList,
};

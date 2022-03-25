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

  // read all values starting at the head;

  // define a variable called current and set to head

  // while the current node is not null
  //     read the value of the current node.
  //     set the current node equal to the next node

  // O(n) time.
  // O(1) space.
  traverse(cb) {
    let result = [];
    let current = this.head;

    while(current !== null) { // if truthy we know that current is equal to a node.
      result.push(cb(current.value));
      current = current.next;
    }

    console.log('done with our traversal');
  }

  // add values to the end
  add() {

  }

  // adding to the start
  prepending() {

  }
}

let ll = new LinkedList();

let nodeA = new Node(20);
let nodeB = new Node(25);
let nodeC = new Node(12);
let nodeD = new Node(-13);


ll.head = nodeA;
ll.head.next = nodeB;
ll.head.next.next = nodeC;
ll.head.next.next.next = nodeD;

// console.log(JSON.stringify(ll));
ll.traverse(console.log);

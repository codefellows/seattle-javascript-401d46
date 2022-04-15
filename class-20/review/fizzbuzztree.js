'use strict';

const util = require('util'); // could be hdlpful for logging / validation

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}


class KaryTree {
  constructor() {
    this.root = null;
  }
}

function fizzbuzztree(tree) {
  const newTree = new KaryTree();
  newTree.root = new Node();

  const traversal = (originalNode, newNode) => {

    newNode.value = fizzbuzzify(originalNode);

    for (let childIndex in originalNode.children) {
      let childNode = originalNode.children[childIndex];
      let emptyNode = new Node();
      newNode.children[childIndex] = emptyNode;

      traversal(childNode, emptyNode);
    }
  };

  traversal(tree.root, newTree.root);
  return newTree;
}

function fizzbuzzify(node) {
  if (node.value % 15 === 0) {
    return 'fizzbuzz';
  } else if (node.value % 5 === 0) {
    return 'buzz';
  } else if (node.value % 3 === 0) {
    return 'fizz';
  } else {
    return node.value.toString();
  }
}


// Testing!!!

let testTree = new KaryTree();

testTree.root = new Node(150);

testTree.root.children[0] = new Node(49);
testTree.root.children[1] = new Node(903);
testTree.root.children[2] = new Node(13);

const fizzbuzzifiedTree = fizzbuzztree(testTree);

console.log(fizzbuzzifiedTree);
console.dir(fizzbuzzifiedTree);

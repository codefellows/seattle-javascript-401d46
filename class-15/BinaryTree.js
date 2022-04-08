'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  preOrder() {

    let results = [];

    let traverse = (node) => {

      // do
      results.push(node.value);

      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);

      // do
      results.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let traverse = (node) => {
      // where do I go?
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      // do
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }

  breadthFirst() {
    let results = [];
    let current = this.root;
    let children = [current];

    while(children.length) {
      current = children.pop();
      results.push(current.value);
      if (current.left) children.unshift(current.left);
      if (current.right) children.unshift(current.right);
    }

    return results;
  }
}

let tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(4);
tree.root.right = new Node(40);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(7);
tree.root.left.right.right = new Node(9);
tree.root.right.left = new Node(30);
tree.root.right.right = new Node(56);

let values = tree.breadthFirst();
console.log(values);

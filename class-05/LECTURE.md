# Class 05: DSA Linked Lists plus Big O

## Algorithm Efficiency

Tanner: How we measure the efficiency in "Time" or "Space".
Jacob: How long does a function run, and how many resouces "system memory" does our function need? (Given the size of its inputs)
Jeffrey: How many times you need to recurse or iterate. Do you have to create seperate data structure to store things while our function runs.

Constant: function is constantly efficient. Does not vary with regards to input.
Logarithmic: function runs much less than linear (but not as efficient as constant), but still grows with input size.
Linear: function efficiency grows linearly, at the same rate as the inputs.

## Linked Lists

A dynamic linear sequence of data storage continers. In JavaScript this is the job of an array.

Node: a storage container that is PART of a linked list.
  Contains a value and a reference to another node refered to as the `next` node.
Singly: Linked List whos nodes only have a reference to the `next` node.
Doubly: Nodes have access to 2 references, `next` and `previous`.
Head: The beginning of a linked list.
  Tail: the end of the linked list.
Current: The node that is being "read" right now.
Traversal: Reading all values in a linked list, starting from the head.

```javascript

let names = new Array(10); // arrays are great at efficiently reading values

console.log(names); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

names[10] = 'Jacob';

let temp = new LinkedList(); // are great at dynamically storing.

for (let i in names) {
  temp.add(names[i]);
}
temp.add('Jacob');

const moreNames = new Array(20);

```

### Traversals

Reading all values in the linked list.

```javascript

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedLinked {
  constructor() {
    this.head = null;
  }

  // add values to the end
  add() {

  }

  // adding to the start
  prepending() {

  }
}

```

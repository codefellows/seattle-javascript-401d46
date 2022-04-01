# Class 10 - DSA: Stacks and Queues

## Review

What are Linked Lists?

- A chain of nodes that hold values, each node is connected to each other by a next property.  The first node is the head, last node is the tail, and the last node contains null as a `next` property.
- A node is a place to store things and place to refer to the next thing.

## Overview

Stacks - linked lists that follow a FiLO ordering (first in last out).
Queue - linked lists that follow a FiFo ordering (first in first out)

## Terminology

- Top: A Node at the beginning of a stack.
- Push: method for adding values to a stack, always adds to the top.
- Pop: removing a value from the stack, always removes from the top.
- Front: Refers to the beginning of a Queue.
- Back: the last node in a Queue.
- Enqueue: How we add a node to the Queue, adds to the back.
- Dequeue: How we remove a node from the Queue, remove from the front.

## Behaviors

Use Cases:

- Reversing things: reverse a string. If you need anything an reverse -> stack will provide a clear solution.
- If you need to process things in Fifo order.

- Traversal still inolves reading all values, but the order read, will differ depending on which structure

```javascript
// we can traverse any linked list type structure
function traverse(start) {

  let current = start; // the front / top

  while(current) {
    console.log(current.value);
    current = current.next;
  }

}
```

### Push

Adding a value to a Stack

- Is there a Node a the Top?
- Store to the top in temp varible.???
- Store value in Node container.
- Set next on new node equal to top.
- Set top equal to new node.

```text
define Push:
  value <- input
  create new Node from value
  new Node next <- top
  top <- new Node
```

### Pop

Removing a value from a stack.

- Check if there is something on the top?
- create a temp variable equal to the top.
- Move top to the temp next node.
- set temp next to null
- return the temp value.

```text

define pop:
  if !this.isEmpty():
    set temp <- top
    top <- temp.next
    temp.next <- null
    return temp.value

```

### Enqueue

Adding a value to a Queue

How similar to pushing
- Brady: we are adding to a different position in our structure
- turn our value into a node.
- take the current back, sets it's next to our new node.
- move the back, to the new node.

```text
define enqueue:
  value <- input
  new Node(value)
  if (!this.isEmpty()) {
    this.back.next <- new Node
  } else {
    this.front <- new Node
  }
  this.back <- new node
```

### Dequeue

Removing a value from a Queue

- hold onto value of front node
- move front to front.next
- remove the temp.next reference.
- return temp.value

```text
define dequeue:
  temp <- this.front
  this.front <- this.front.next
  if (!temp.next) {
    this.back = null;
  }
  temp.next <- null
  return temp.value
```

### Peek

Looking at the beginnging of the Stack / Queue

```text

return this.front.value / this.top.value

```

### IsEmpty

Returns a boolean whether or not a Stack / Queue has any nodes.

```text

return (this.front === null);

```

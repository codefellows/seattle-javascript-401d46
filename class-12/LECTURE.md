# Class 01: TCP/WebSockets and Socket.io

## Warm Up

PseudoQueue - Creating a Queue using 2 stacks.

Slinky challenge?
- Enqueueing: push values into the first stack.
- Dequeuing:
  - pop (check stack 2 is not Empty, if so just pop the next thing, if it is empty check if stack 1 is also empty, if not pop everthing)
    - push (all the values that we just popped)
    - pop (the next value off of stack 2)

## Review

Tee: High level overview.
Jeffrey: Crypto node module (v16)
  * v12 does not support `crypto`.
  * UUIDs in the labs with crypto.
  * Node event listeners, uses similar listener logic to our browser `events`.
Micha: Running the scripts in a particular order.
  * Calling in modules just for side effects.

Problem: What happens to message that are emitted with no subscribers (yet).

TDD: Vendor / Driver / HUB

## TCP / WebSocket

What are these?

How are we using them?

## TDD: Clients and Servers over Socket.io

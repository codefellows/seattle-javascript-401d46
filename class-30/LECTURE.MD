# HashTables

## Review

- Linked Lists, Stacks, Queues
  - each node links to at least one otehr node 
  - in simple form, links to ONE other node
- Binary Trees & Binary Search Tree, K-Ary trees
  - heirarchy.  descend from a root.  
  - "bi" nary tree has up to 2 descendants
  - "K" Ary tree has up to "K" descendants
- Sorts (arrays)
## Whiteboard

[HashTables](https://projects.invisionapp.com/freehand/document/6KkaXxkxs)

## Overview

It's structure that stores key value pairs.  Location, Location, Location!  location in the structure is determined by a hashing function

  - WHY?!  
     - Micha:  Performant lookup
     - Rey in chat:  0(1) lookup
     - Jeffrey:  can look in THE EXACT SPOT

## Termminology

- Hashing:  pass in a key as a string, return hashed string as a number.  The "number" translates to a specific or "deterministic" place within our structure
  - our algorthim will plan for collisions, 
  - Some Languages have BUILT IN functionality

- Bucket:  Jeffrey
  - Micha:  an address

- Collision:  when 2 or more keys hash to teh same position in our Table.   
  - perfect hash would provide NO collisions
  - the better the hash, the more buckets and the fewer the collisions


## Hashing Algorithm

The goal is input a key, and output a location in our Table
- decide how many buckets we want `1024`
- Turn the key into a string (or require it to be a string)
  - Convert string characters into ASCII values
  - Sumour ASCII values
  - multiply by some large prime number `599`
  - take that number:  % the size (number if buckets)
    - the result will be an index aka location within our Table

```javascript
let key = 'Ryan';
let value = 47;

let ryansSum = 410;

410 * 599 = 245590

245590 % 1024 = 854

function hash(key){
  let characters = key.split('');
  let asciiSum = characters.reduce((sum, char) => {
    return sum +  char.charCodeAt(0);
  }, 0);

  let initialHash = asciiSum * 599

  return initalHash % 1024
}

```



## Implementation


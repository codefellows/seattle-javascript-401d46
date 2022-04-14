# Fizz Buzz Tree

Create a K-ary tree, from an existing tree, but fibuzzify it!

- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

## Solution

1. instantiate a new tree
1. Traverse the input tree using depth first in-order.
1. for each node in the tree, fibuzzify each value, and add each node to the new tree.
1. return the new tree.

## PseudoCode

```java
INPUT: tree

DEFINE newTree <- KaryTree
SET newTree.root <- new empty Node

DEFINE traversal
 INPUT: OriginalNode
 INPUT: NewNode

 set newNode value to fizzbuzify(OrginalNode)
 for each child of OrginalNode
    add empty Node as child to newNodes Children

  traversal (child, NewNode at same index)



traversal(tree.root, newTree.root)


DEFINE fuzzibuzzify function
  INPUT <- node

  if nodes value is divisible by 15
    change value to fizzbuzz
  if nodes value is divisible by 5
    change value to buzz
  if nodes value id divisible by 3
    chance value to fizz
  else
    change value to a string

```

[FizzBuzz Kary Tree](https://projects.invisionapp.com/freehand/document/ePIV6qUli)

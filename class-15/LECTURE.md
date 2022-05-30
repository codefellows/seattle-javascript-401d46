# Class 15: Trees

## Review

Linked Lists / Stack / Queues

- Data structures in which Nodes are connected via reference.
- How many nodes? Just one.
- Linear Sequence of nodes.

## Overview

Non linear Data structure with more than one. Hierarchical organization. Always a-cyclical (more of a graph).

## Terminology

Binary Tree: A tree whose node has a left and a right child.
K-Ary Tree
Node/Vertex: The storage container that has references to more than one child node.
Left: A Node that on the "left side" of a parent node.
Right: A Node that on the "right side" of a parent node.
Parent: A Node that has one or more children, direct descendants.
Children: Nodes that are descendants of the root.
Siblings / Neighbors: Nodes that share the same direct parent.
Leaf: Nodes that have no children.
height:  A number that represents the path (the number of edges) from the root to the furthest leaf.
Level: The position from the root to the current node.
Edge: A connection between nodes.
Balanced Trees: Height of the Left and Right subtrees differ by no more than 1.

## Traversals

How can we read all values in a Tree?

- Depth First: Read all the sub children on one side of the tree, before reading children of the other side.
  - Pre Order: Current Node -> Left Subtree -> Right Subtree.
  - In Order: Left Subtree -> Current Node -> Right Subtree
  - Post Order: Left Subtree -> Right Subtree -> Current Node

- Breadth First: Read all nodes on the current level, before traversing to subtrees.

## K-ary and Binary Search Trees

Implement a Binary Search Tree: Stores stored data, most commonly numbers. Lower numbers are stored on the left subtrees, greater numbers are stored on the right subtrees.

Create an Add Method specifically for a Binary Search Tree.

## Code Challenge

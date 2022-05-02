# Class 31: React Context API

## Warm Up

Prompt: *Given a Binary Tree of integer values, return a list of all duplicate values found in the Tree.*

## Review

* Appliction State
* React API

## Global State with Context

Context is an object, that can be consumed (read / updated) by any children of a React Application.

* Provider: Maintiains an internal state that is accessible to any child of the provider.
* Consumers: Child components that may opt into, context values / behaviors.

When to use: When you need to share information across mutiple sibling components
  * Settings read by all components.
    * Theme values.
    * Twitter, emails, lists of products.

When not to use: Forms / Complex Component groups that directly share values that other sibling components have to business accessing
  * Input values.
  * Component toggle value.

## TDD: Testing Context Objects

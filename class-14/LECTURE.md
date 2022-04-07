# Class 14: Final Socket Day

## Warm Up

Validate Parentheses: are parenthesese balanced?

- Strategy:

- read the values of the string: iteratively
examples `{}` => `{` , `}`
- Is each character open or closed?
- Are we implementing a stack or a queue?
  - Maybe a stack?
  - Check the top of the stack and compare.
  - If matching pop, if not push.
  - Push open bracket into the stack.
    - We can use the stack to validate the order or openning and closing brackets.
    - If you can empty the stack return true.
  - Once all string values have been accounted for and our stack is empty we can return true.
  - If there is something remaining in the stack || if there is unaccounted string characters with no match.

Using regex?  Yes!
  - filtering out the non bracket characters.

## Review

- Lab 13

Garantee message delivery to subcribers
- Driver - subscriber to `pickup` event.
  - pickup queue
- Vendor - subscriber to `delivered` event.
  - delivered queue

Micha: issue with adding the messageIds in the payload.

- Where we've been
  - Week 1
  - Week 2

## Where we are going

- AWS

## Lab 14

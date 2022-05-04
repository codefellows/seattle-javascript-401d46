# Class 33: Auth Context

## Warm Up

Breakout Room: 5 minutes - Check if a string is title
  * Title is a string in which every first character in a word is uppercase.

```javascript

function isTitle(string) {

  let arr = string.split(' '); // string may have mutliple words, creates an array of words

  // check if each letter is capitalized
  arr = arr.map(word => {
    return word[0]; // returns each first letter.
  });

  // loop through
  for (let i = 0;  i < arr.length; i++) {
    // check if each letter is capitatlized
    if (arr[i] === arr[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

```

## Review

Pagination Behaviors
*  Giving the user th ability to change our `pageItems`.
*  Once changed more or less todo items should be prewsent on the page.
* Browser Router to render todos or settings.

## TDD: Auth Context and Login Components

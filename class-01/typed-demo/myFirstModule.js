'use strict';

function sayName(name) {
  console.log('Hello ' + name);
}

function greet(greeting, name) {
  console.log(greeting + ' ' + name);
}

// exporting a module
module.exports = {
  sayName,
  greet,
};

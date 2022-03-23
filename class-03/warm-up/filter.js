'use strict';

module.exports = (structure, callback) => {
  let emptyStructure;
  let looper;
  // what type of thing is our structure
  if (Array.isArray(structure)) {
    emptyStructure = [];
    looper = structure;
  } else {
    emptyStructure = {};
    looper = Object.keys(structure);
    // Use object.keys to convert "arr" to an array every time?
    // use for in
  }


  for (let i = 0; i < looper.length; i++) {
    let key = looper[i];
    console.log(key, structure[key]);
    // if (!structure[key]) {
    if (callback(key)) { //if true, push arr[i] to emptyArray
      emptyStructure.push(key);

    }
    // }
  }

  // But then we have to turn it back into an object!
  return emptyStructure;
};
//0 is falsey
//c

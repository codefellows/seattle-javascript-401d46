function map(array, cb) {
  let emptyArray = [];

  for (let i = 0; i < array.length; i++) {
    emptyArray.push(cb(array[i], i));
  }
  return emptyArray;
}

module.exports = map;

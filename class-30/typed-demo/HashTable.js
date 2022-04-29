'use strict';

let LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  /**
   * takes a key as string and returns a hash as an integer
   * @param {String} key 
   * @returns Integer / hash
   */
  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024
  }

  // set
  set(key, value){
    // hash is the position inside the table where we will "set" the key value pair
    let position = this.hash(key);
    let data = {[key]: value};

    // we check if there is a bucket at the specified position
    // if bucket exists, add our data
    if(this.buckets[position]) {
      // the  bucket is a linked list and has an add method
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      // if no bucket exists, we create a new bucket aka new LinkedList
      let bucket = new LinkedList();

      // we need add our data to THAT bucket
      bucket.add(data);

      // we need to add our bucket to THAT position
      this.buckets[position] = bucket;
    }
  }

  // get
  get(key){
    let position = this.hash(key);

    //does the bucket exist?
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      // I'll assume no collision and grab the head, I'll leave the traversal
      let value = bucket.head.value[key];
      return value;
    }
  }

  // contains - I'll leave this to you all
}

let table  = new HashTable(1024);
console.log(table);
console.log(table.hash('Ryan'));
table.set('Ryan', 47);
table.set('Jacob', 32);
table.set('Audrey', {name: 'Audrey'});
console.log('table:', table);
console.log('Ryan: ', table.get('Ryan'));
console.log('Jacob: ', table.get('Jacob'));
console.log('Audrey: ',table.get('Audrey'));

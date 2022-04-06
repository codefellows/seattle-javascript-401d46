'use strict';

const Queue = require('./');

describe('Testing our Queue storage', () => {

  let queue = new Queue();

  test('Should add a value', () => {
    queue.store('test', { name: 'Jacob '});
    expect(queue.data['test']).toEqual({ name: 'Jacob ' });
  });

  test('Shuold read a value', () => {
    let testValue = queue.read('test');
    expect(testValue).toEqual({ name: 'Jacob ' });
  });

  test('Shuold remove a value', () => {
    let testValue = queue.remove('test');
    expect(testValue).toEqual({ name: 'Jacob ' });
    expect(queue.data['test']).toBeFalsy();
  });
});

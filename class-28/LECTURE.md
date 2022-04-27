# Class 28: Component LifeCycle and useEffect

## Warm Up

```javascript

/**
 * return a value by searching an object using the propString
 * Object
 * String
 * */
get(obj, propString) {
  console.log(obj); // { age: 50, hair: false, pet: { name: 'rocky' }}
  console.log(propString); // 'spouse.name'
  // we need to split our propString!
  // obj['spouse']; // => false;

  let propArray = propString.split('.'); // delimiter => ['spouse', 'name']
  let sub = obj;

  for (let i = 0; i < propArray.length; i++) {
    let property = propArray[i];
    // does the object contain the valures stored with the keys propArray
    if (sub[property] === undefined) {
      return sub[property]
    }
    sub = sub[property];
      // what do here?
      // return sub[property];
  }
  return sub;
}

```

## Code Review

Merge Sort

```java

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Lifecycle events for Components

Each component goes through some events when the component function is invoked or instantiated.

- DOM node is created, and attached to the DOM -> mounting.
- values are given to class constructors, function parameters -> receiving props.
- contents are rendered on the page -> render.
- React detects changes to values store in state / prop -> Updating.
- Removing the component from the DOM -> Un-mounting.

```javascript

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('Im mounted!!');
  }

  componentWillReceiveProps(props) {
    console.log('I have some data!');
  }

  componentDidUpdate() {
    console.log('something has changed');
  }

  componentDidMount() {}

  componnetWillUnmount() {}

  render() {
    return ();
  }
}

```

## TDD: useEffect / mock API calls (Mock Service Worker)

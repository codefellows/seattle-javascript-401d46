import { useEffect } from 'react';

function People({ list }) {

  useEffect(() => { // is there a way to check state before running our callback?
    console.log('People list has been updated');
  }, [list]); // only runs when our dependency list is updated

  const handleUnmount = () => {
    console.log('People is unmounting');
  }

  useEffect(() => handleUnmount, []); // runs when component unmounts

  return (
    <div data-testid="people-list">
      {list.map(name => <p>{name}</p>)}
    </div>
  )
}

export default People;

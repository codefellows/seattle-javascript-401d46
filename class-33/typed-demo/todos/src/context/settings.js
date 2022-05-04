import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({children}) {

  // values to read
  const [hideCompleted, setHideCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sortString, setSortString] = useState('diffilculty');

  // toggle the hideCompleted value
  const toggleCompleted = () => {
    if (hideCompleted === false) {
      setHideCompleted(true); // always sets to true/ how to toggle?
    } else {
      setHideCompleted(false);
    }
  }

  const displayNum = (num) => {
    if (typeof num === 'number' && !isNaN(num)) {
      setPageItems(num);
    }
  }

  const setSort = (string) => {
    if (typeof string === 'string') {
      setSortString(string);
    }
  }

  let values = {
    hideCompleted,
    pageItems,
    sortString,
    toggleCompleted,
    displayNum,
    setSort,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider >
  )
}

export default SettingsProvider;

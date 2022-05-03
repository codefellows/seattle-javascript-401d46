import React, {useState} from 'react';

// 3 things required to use context
export const PaginationContext = React.createContext(); // 1) create context from React

// Create a Provider to attach to our Component Tree.
function PaginationProvider({ children }) { // 2) create a provider component

  // 3) Create any values we want to provide
  const [completed, setCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('diffculty');

  // all of these values are stored in state (React is keeping these values safe, and changes will cause side effects)

  // we don't want children to have access directly to setters that mutate state uncontrollably.

  // We can create our own functions to manage state here, or create reducers / initial State object to reduce unexpected side effects
  const addCompletedItem = (item) => {
    // properly add an item to our list

    // is item an Item? is there any rules that our state needs to follow?
  }

  return (
    <PaginationContext.Provider value={{ completed, pageItems, sort, addCompletedItem }}>
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationProvider;

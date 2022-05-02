import React, { useState } from 'react';

// some object created by React, give it a name that describes a feature
export const ThemeContext = React.createContext();

// component that exports a Provider from our context object.
function ThemeProvider({children}) {

  const [mode, setMode] = useState('light');

  return (
    <ThemeContext.Provider value={{ mode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import SideNav from './components/sideNav/SideNav';
import ArticleList from './components/articleList/ArticleList';

// Our root level component
function App() {

  let [state, setState] = useState({}); // invoke your hook at the top of your component, useState takes a value that represents a "piece" of state.

  console.log("Here is our functional state: ", state);
  // setState({value: 1});

  const handleClick = (e) => {
    let value = e.target.value;
    setState({ input: value });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-Button"
          onClick={handleClick}
          value="jacob"
        >
          Learn React
        </button>
      </header>
      <SideNav>
        <ArticleList />
      </SideNav>
    </div>
  );
}

export default App;

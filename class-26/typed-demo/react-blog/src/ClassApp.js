import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    let value = e.target.value;
    this.setState({input: value});
  }

  render() {
    console.log('Here is our class state: ', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-Button"
            onClick={this.handleClick}
            value="jacob"
          >
            Learn React
          </button>
        </header>
      </div>
    )
  }
}

export default App;

import logo from './logo.svg';
import { ThemeContext } from './context/theme';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThemeContext.Consumer>
            {(theme) => (
              <p>{theme.mode}</p>
            )}
          </ThemeContext.Consumer>
        </a>
      </header>
    </div>
  );
}

export default App;

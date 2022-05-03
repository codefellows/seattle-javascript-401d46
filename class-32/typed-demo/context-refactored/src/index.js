import React from 'react';
import ReactDOM from 'react-dom';
// how do provide values to
import PaginationProvider from './context/pagination.js';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <PaginationProvider>
        <App />;
      </PaginationProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

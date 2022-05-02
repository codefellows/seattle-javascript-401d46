import React from 'react';

export const SettingsContext = React.createContext(); // creates context "box" object

class SettingsProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Awesome Site',
      email: 'code401@codefellows.com',
      twitter: 'weCode@twitter.com'
    }
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsProvider;

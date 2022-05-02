import React from 'react';
import { SettingsContext } from '../../context/settings';

class Title extends React.Component {

  // sets a property on the Constructor!
  static contextType = SettingsContext;

  render() {
    return <h1>{this.context.title}</h1>
  }

}

export default Title;

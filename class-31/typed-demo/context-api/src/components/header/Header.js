import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme';
import { SettingsContext } from '../../context/settings';
import Title from '../title/Title';
import { Switch, Icon } from '@blueprintjs/core';

function Header() {

  // calls the useContext Hook to return context API values.
  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <div id="header">
      <Title />
      <h2>Settings</h2>
      <Icon icon="settings" />
      <Switch label={`${theme.mode} Theme`} checked={checked} onChange={handleChecked} />
      <SettingsContext.Consumer>
        {settings => (
          <p>{settings.email}</p>
        )}
      </SettingsContext.Consumer>
    </div>
  )

}

export default Header;

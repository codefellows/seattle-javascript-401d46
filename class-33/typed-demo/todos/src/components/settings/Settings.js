import { useContext } from 'react';
import { SettingsContext } from '../../context/settings';

function Settings() {

  const settings = useContext(SettingsContext);
  console.log(settings)
  return (
    <div id="settings-container">
      <button onClick={() => settings.toggleCompleted()} >Toggle Is Completed</button>
    </div>
  )
}

export default Settings;

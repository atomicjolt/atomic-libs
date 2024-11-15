import React from 'react';
const updateGlobalSetting = () => {};

export const SettingsContext = React.createContext({
  ...window.DEFAULT_SETTINGS,
  updateGlobalSetting
});

export function withSettings(Component) {
  return function SettingsComponent(props) {
    return (
      <SettingsContext.Consumer>
        {(settings) => <Component {...props} settings={settings} />}
      </SettingsContext.Consumer>
    );
  };
}
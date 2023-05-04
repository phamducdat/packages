import React, { ReactNode } from 'react';
import { Config, ConfigContext } from './ConfigContext';

interface ConfigProviderProps {
  config: Config;
  children: ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  return (
    <ConfigContext.Provider value={props.config}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;

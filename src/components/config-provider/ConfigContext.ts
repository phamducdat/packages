import { createContext } from 'react';

export interface Config {
  them?: string;
  language?: string;
}

const defaultConfig: Config = {
  them: 'light',
  language: 'en',
};

export const ConfigContext = createContext<Config>(defaultConfig);

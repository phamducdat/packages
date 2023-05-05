import { createContext } from 'react';

export interface TableConfig {
  params?: {
    pageText?: string;
    pageSizeText?: string;
    sortText?: string;
  };
}

export interface Config {
  table?: TableConfig;
}

const defaultConfig: Config = {
  table: {
    params: {
      sortText: 'sort',
      pageSizeText: 'pageSize',
      pageText: 'page',
    },
  },
};

export const ConfigContext = createContext<Config>(defaultConfig);

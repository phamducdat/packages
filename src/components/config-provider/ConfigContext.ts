import { createContext } from 'react';

export interface TableConfig {
  params?: {
    pageText?: string;
    pageSizeText?: string;
    sortFieldText?: string;
    sortOrderText?: string;
  };
}

export interface Config {
  table?: TableConfig;
}

const defaultConfig: Config = {
  table: {
    params: {
      pageSizeText: 'pageSize',
      pageText: 'page',
      sortFieldText: 'sortField',
      sortOrderText: 'sortOrder',
    },
  },
};

export const ConfigContext = createContext<Config>(defaultConfig);

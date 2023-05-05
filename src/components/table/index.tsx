import React, { useContext, useEffect, useState } from 'react';
import {
  Table as AntTable,
  TablePaginationConfig,
  TableProps as AntTableProps,
} from 'antd';
import { ConfigContext } from '../config-provider/ConfigContext';
import { useLocation, useSearchParams } from 'react-router-dom';

export type TableProps = AntTableProps<any>;

const Table: React.FC<TableProps> = (props) => {
  const config = useContext(ConfigContext);
  const params = config.table?.params ?? {};
  const defaultParams = {
    pageText: 'page',
    pageSizeText: 'pageSize',
    sortText: 'sort',
  };
  const { pageText, pageSizeText, sortText } = { ...defaultParams, ...params };
  const [searchParams] = useSearchParams();
  const [paginationData, setPaginationData] = useState();
  const location = useLocation();

  const pagination: TablePaginationConfig = {
    ...props.pagination,
    defaultCurrent: parseInt(searchParams.get(pageText) ?? '1', 10),
    defaultPageSize: parseInt(searchParams.get(pageSizeText) ?? '1', 10),
  };

  useEffect(() => {
    console.log('dat with search params = ', searchParams.get(pageText));
  }, [searchParams]);

  useEffect(() => {
    console.log('dat with location, params = ', location, searchParams);
  }, []);

  console.log('dat with pagination = ', pagination);
  return (
    <div>
      <AntTable {...props} pagination={pagination} />
    </div>
  );
};

export default Table;

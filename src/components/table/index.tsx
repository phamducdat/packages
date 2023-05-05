import React, { useContext, useEffect, useState } from 'react';
import {
  Table as AntTable,
  TablePaginationConfig,
  TableProps as AntTableProps,
} from 'antd';
import { ConfigContext } from '../config-provider/ConfigContext';
import { useSearchParams } from 'react-router-dom';
import { ColumnProps } from 'antd/es/table';

export type TableProps = AntTableProps<any>;

const Table: React.FC<TableProps> = (props) => {
  const config = useContext(ConfigContext);
  const params = config.table?.params ?? {};
  const defaultParams = {
    pageText: 'page',
    pageSizeText: 'pageSize',
    sortOrderText: 'sortOrder',
    sortFieldText: 'sortField',
  };
  const { pageText, pageSizeText, sortOrderText, sortFieldText } = {
    ...defaultParams,
    ...params,
  };
  const [searchParams] = useSearchParams();
  const { columns } = props;
  const [customColumns, setCustomColumns] = useState<ColumnProps<any>>();

  // useEffect(() => {
  //   const sortField = searchParams.get(sortFieldText)?.toString() ?? '';
  //   columns.fil;
  // }, [searchParams]);

  const pagination: TablePaginationConfig = {
    ...props.pagination,
    defaultCurrent: parseInt(searchParams.get(pageText) ?? '1', 10),
    defaultPageSize: parseInt(searchParams.get(pageSizeText) ?? '1', 10),
  };

  return (
    <div>
      <AntTable {...props} pagination={pagination} />
    </div>
  );
};

export default Table;

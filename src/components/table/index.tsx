import React, { useContext, useEffect, useState } from 'react';
import {
  Table as AntTable,
  TablePaginationConfig,
  TableProps as AntTableProps,
} from 'antd';
import { ConfigContext } from '../config-provider/ConfigContext';
import { useSearchParams } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [customColumns, setCustomColumns] = useState<ColumnsType<any>>();
  const { columns } = props;

  function updateColumns(dataIndex: string, newProperties: object) {
    return columns?.map((element) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (element.dataIndex === dataIndex) {
        return {
          ...element,
          ...newProperties,
        };
      }
      return element;
    });
  }

  useEffect(() => {
    const dataIndex = searchParams.get(sortFieldText);
    const sortOrder = searchParams.get(sortOrderText);
    if (columns && dataIndex && sortOrder) {
      const customColumns = updateColumns(dataIndex, {
        sortOrder: sortOrder,
        sorter: true,
      });
      setCustomColumns(customColumns);
    }
  }, [searchParams.get(sortFieldText), searchParams.get(sortOrderText)]);

  const pagination: TablePaginationConfig = {
    ...props.pagination,
    defaultCurrent: parseInt(searchParams.get(pageText) ?? '1', 10),
    defaultPageSize: parseInt(searchParams.get(pageSizeText) ?? '1', 10),
  };

  const onChange: TableProps['onChange'] = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {
    const field = sorter.field;
    const order = sorter.order;
    const params = new URLSearchParams(searchParams);

    params.set(sortFieldText, field);
    params.set(sortOrderText, order);
    setSearchParams(params.toString());
  };

  return (
    <div>
      <AntTable
        {...props}
        pagination={pagination}
        columns={customColumns}
        onChange={onChange}
      />
    </div>
  );
};

export default Table;

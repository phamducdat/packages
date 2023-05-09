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

const Table: React.FC<TableProps> = ({ columns, ...restProps }) => {
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

  function updateSortColumns(dataIndex: string, orderProperty: object) {
    return columns?.map((element) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (element.dataIndex === dataIndex) {
        if (element.sorter) {
          return {
            ...element,
            ...orderProperty,
          };
        } else {
          return {
            ...element,
            ...orderProperty,
            sorter: true,
          };
        }
      }
      return element;
    });
  }

  useEffect(() => {
    const dataIndex = searchParams.get(sortFieldText);
    const sortOrder = searchParams.get(sortOrderText);
    if (columns && dataIndex && sortOrder) {
      const customColumns = updateSortColumns(dataIndex, {
        sortOrder: sortOrder,
      });
      setCustomColumns(customColumns);
    }
  }, [searchParams.get(sortFieldText), searchParams.get(sortOrderText)]);

  const pagination: TablePaginationConfig = {
    ...restProps.pagination,
    defaultCurrent: parseInt(searchParams.get(pageText) ?? '1', 10),
    defaultPageSize: parseInt(searchParams.get(pageSizeText) ?? '1', 10),
  };

  const onChange: TableProps['onChange'] = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {
    const params = new URLSearchParams(searchParams);

    if (extra.action === 'sort') {
      const field = sorter.field;
      const order = sorter.order;

      params.set(sortFieldText, field);
      params.set(sortOrderText, order);
    }

    if (extra.action === 'paginate') {
      const current = pagination.current;
      const pageSize = pagination.pageSize;

      params.set(pageText, current);
      params.set(pageSizeText, pageSize);
    }

    setSearchParams(params.toString());
    restProps.onChange?.(pagination, filters, sorter, extra);
  };

  return (
    <div>
      <AntTable
        {...restProps}
        pagination={pagination}
        columns={customColumns}
        onChange={onChange}
      />
    </div>
  );
};

export default Table;

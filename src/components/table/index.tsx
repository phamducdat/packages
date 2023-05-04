import React from 'react';
import { Table as AntTable, TableProps as AntTableProps } from 'antd';

export type TableProps = AntTableProps<any>;

const Table: React.FC<TableProps> = (props) => {
  return (
    <div>
      <AntTable />
    </div>
  );
};

export default Table;

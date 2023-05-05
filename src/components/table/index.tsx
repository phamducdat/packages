import React, { useContext } from 'react';
import { Table as AntTable, TableProps as AntTableProps } from 'antd';
import { ConfigContext } from '../config-provider/ConfigContext';

export type TableProps = AntTableProps<any>;

const Table: React.FC<TableProps> = (props) => {
  const config = useContext(ConfigContext);
  const params = config.table?.params ?? {};
  return (
    <div>
      <AntTable {...props} />
    </div>
  );
};

export default Table;

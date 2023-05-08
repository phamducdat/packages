import React from 'react';
import { ColumnsType } from 'antd/es/table';
import Table from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  title: 'Table',
  component: Table,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routerPath: '/table',
      searchParams: {
        page: '4',
        pageSize: '10',
        sortField: 'name',
        sortOrder: 'ascend',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table
    dataSource={data}
    columns={columns}
    pagination={{
      total: 47,
      showSizeChanger: true,
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};

import ConfigProvider from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from '../../table';
import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ColumnsType } from 'antd/es/table';

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
  title: 'Config Provider',
  component: ConfigProvider,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/table',
      searchParams: { page: '4', pageSize: '10' },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ConfigProvider>;

const Template: ComponentStory<typeof ConfigProvider> = (args) => (
  <ConfigProvider {...args}>
    <Table
      dataSource={data}
      columns={columns}
      pagination={{
        total: 47,
        showSizeChanger: true,
      }}
    />
  </ConfigProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  config: {
    table: {
      params: {
        sortText: 'sort',
        pageSizeText: 'pageSize',
        pageText: 'page',
      },
    },
  },
};

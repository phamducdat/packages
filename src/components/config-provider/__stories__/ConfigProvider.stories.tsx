import ConfigProvider from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from '../../table';
import React from 'react';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
export default {
  title: 'Config Provider',
  component: ConfigProvider,
  argTypes: {},
} as ComponentMeta<typeof ConfigProvider>;

const Template: ComponentStory<typeof ConfigProvider> = (args) => (
  <ConfigProvider {...args}>
    <Table dataSource={dataSource} columns={columns} />
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

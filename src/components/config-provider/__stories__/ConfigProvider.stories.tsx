import ConfigProvider from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from '../../table';
import React from 'react';

export default {
  title: 'Config Provider',
  component: ConfigProvider,
  argTypes: {},
} as ComponentMeta<typeof ConfigProvider>;

const Template: ComponentStory<typeof ConfigProvider> = (args) => (
  <ConfigProvider {...args}>
    <Table />
  </ConfigProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  config: {
    them: 'default',
    language: 'vi',
  },
};

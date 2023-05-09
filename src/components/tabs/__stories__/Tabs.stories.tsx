import Tabs from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TabPane from 'antd/es/tabs/TabPane';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Tabs',
  component: Tabs,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routerPath: '/tabs',
      searchParams: {
        'tab-key': 'tabOne',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabPane tab={'TabOne'} key={'tabOne'}>
      TabPane 1
    </TabPane>
    <TabPane tab={'TabTwo'} key={'tabTwo'}>
      TabPane 2
    </TabPane>
  </Tabs>
);

export const Primary = Template.bind({});

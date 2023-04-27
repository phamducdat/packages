import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButton from '../index';

export default {
  title: 'Button',
  component: CustomButton,
  argTypes: {},
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

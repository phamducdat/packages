import CustomSider from "../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Sider',
    component: CustomSider,
    argTypes: {},
} as ComponentMeta<typeof CustomSider>


const Template: ComponentStory<typeof CustomSider> =
    (args) => <CustomSider {...args}/>


export const Primary = Template.bind({});
Primary.args = {}
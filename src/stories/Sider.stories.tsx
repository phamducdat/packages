import DP_Sider from "../components/sider";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Sider',
    component: DP_Sider,
    argTypes: {},
} as ComponentMeta<typeof DP_Sider>

const Template: ComponentStory<typeof DP_Sider> = (args) => <DP_Sider {...args}/>


export const Primary = Template.bind({});
Primary.args = {
    
}

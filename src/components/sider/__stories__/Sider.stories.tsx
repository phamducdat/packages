import CustomSider from "../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CustomMenuItemType} from "../menu/CustomMenuItemType";
import {MailOutlined} from "@ant-design/icons";

export default {
    title: 'Sider',
    component: CustomSider,
    argTypes: {},
} as ComponentMeta<typeof CustomSider>


const Template: ComponentStory<typeof CustomSider> =
    (args) => <CustomSider {...args}/>


const demoItems: CustomMenuItemType[] = [
    {
        label: "datpd",
        title: "datpd",
        path: "/datpd",
        icon: <MailOutlined/>
    }
]


export const Primary = Template.bind({});
Primary.args = {
    menuProps: {
        items: demoItems
    }

}
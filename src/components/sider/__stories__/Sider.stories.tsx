import CustomSider from "../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {CustomItemType} from "../menu/hooks/useCustomItems";

export default {
    title: 'Sider',
    component: CustomSider,
    argTypes: {},
} as ComponentMeta<typeof CustomSider>


const Template: ComponentStory<typeof CustomSider> =
    (args) => <CustomSider {...args}/>


const demoItems: CustomItemType[] = [
    {
        label: 'Navigation One',
        path: 'mail',
        icon: <MailOutlined/>,
    },
    {
        label: 'Navigation Two',
        path: 'app',
        icon: <AppstoreOutlined/>,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        path: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        path: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        path: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        path: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        path: 'setting:4',
                    },
                ],
            },
        ],
    }
]


export const Primary = Template.bind({});
Primary.args = {
    menuProps: {
        items: demoItems,
        mode: 'inline'
    }

}
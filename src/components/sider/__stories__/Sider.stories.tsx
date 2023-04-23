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
        label: 'Root',
        path: '/root',
        icon: <MailOutlined/>,
    },
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: <AppstoreOutlined/>,
    },
    {
        label: 'Home',
        path: '/home',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Human Resource',
                children: [
                    {
                        label: 'Time keeping',
                        path: '/time-keeping',
                        children: [
                            {
                                label:"Decision",
                                path:"/decision",
                            }
                        ]
                    },
                    {
                        label: 'Salary',
                        path: '/salary',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Driver',
                children: [
                    {
                        label: 'Company',
                        path: '/company',
                    },
                    {
                        label: 'Department',
                        path: '/department',
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
        mode: 'inline',
        path:'/home/time-keeping/decision'
    }

}
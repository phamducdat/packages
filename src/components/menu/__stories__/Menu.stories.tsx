import MenuPath from "../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ItemPathType} from "../hooks/useCustomItems";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";


export default {
    title: "Menu",
    component: MenuPath,
    argTypes: {}
} as ComponentMeta<typeof MenuPath>


const Template: ComponentStory<typeof MenuPath> =
    (args) => <MenuPath {...args}/>

const demoItems: ItemPathType[] = [
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
                                label: "Decision",
                                path: "/decision",
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
    items: demoItems,
    mode: 'inline',
    path: '/home/time-keeping/decision',
    onPathChange: (path: string) => {
        console.log("dat with value = ", path)
    }

}

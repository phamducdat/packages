import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {CustomMenuItemType} from "../CustomMenuItemType";
import React from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";

export const convertCustomMenuItemToMenuItem = (from: CustomMenuItemType[]): ItemType[] => {
    return [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined/>,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined/>,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined/>,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];
};
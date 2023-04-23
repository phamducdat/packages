import {CustomMenuItemType, CustomSubMenuType} from "../CustomMenuItemType";
import React from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {MailOutlined} from "@ant-design/icons";


export type CustomItemType = CustomMenuItemType | CustomSubMenuType | null

export const convertCustomItemTypesToItemTypes = (from: CustomItemType[]): ItemType[] => {
    return (from || []).map((opt, index) => {
        if (opt && typeof opt === "object") {
            const {label, children, key, type, ...restProps} = opt as any;
            return {
                label: 'Navigation One',
                key: 'mail',
                icon: <MailOutlined/>,
            };
        }

        return null;
    }).filter((opt) => opt != null)
};
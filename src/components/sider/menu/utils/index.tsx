import {CustomMenuItemType, CustomSubMenuType} from "../CustomMenuItemType";
import React from "react";
import {ItemType} from "antd/es/menu/hooks/useItems";


export type CustomItemType = CustomMenuItemType | CustomSubMenuType | null

export const convertCustomItemTypesToItemTypes = (from: CustomItemType[]): ItemType[] => {
    return (from || []).map((opt, index) => {
        if (opt && typeof opt === "object") {
            console.log("dat with opt = ", opt)
            const {label, children, path, type, ...restProps} = opt as any;
            return {
                label: label,
                key: path,
                ...restProps
            };
        }

        return null;
    }).filter((opt) => opt != null)
};
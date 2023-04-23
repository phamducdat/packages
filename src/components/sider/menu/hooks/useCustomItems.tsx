import React from "react";
import {ItemType, MenuItemGroupType, MenuItemType, SubMenuType} from "antd/es/menu/hooks/useItems";


export interface CustomSubMenuType extends Omit<Omit<SubMenuType, "key">, "children"> {
    path?: string,
    children?: CustomItemType[]

}

export interface CustomMenuItemGroupType extends Omit<Omit<MenuItemGroupType, "key">, "children">{
    path?: string
    children?: CustomItemType[]

}

export interface CustomMenuItemType extends Omit<MenuItemType, "key"> {
    path?: string
}


export type CustomItemType = CustomMenuItemType | CustomSubMenuType | CustomMenuItemGroupType | null

export const convertCustomItemTypesToItemTypes = (from: CustomItemType[]): ItemType[] => {
    return (from || []).map((opt, index) => {
        if (opt && typeof opt === "object") {
            const {label, children, path, type, ...restProps} = opt as any;

            if (children) {
                return {
                    label: label,
                    key: path,
                    children: convertCustomItemTypesToItemTypes(children),
                    ...restProps
                }
            }

            return {
                label: label,
                key: path,
                ...restProps
            };
        }

        return null;
    }).filter((opt) => opt != null)
};

import React from "react";
import {ItemType, MenuItemGroupType, MenuItemType, SubMenuType} from "antd/es/menu/hooks/useItems";


export interface CustomSubMenuType extends Omit<Omit<SubMenuType, "key">, "children"> {
    path?: string,
    children?: CustomItemType[]

}

export interface CustomMenuItemGroupType extends Omit<Omit<MenuItemGroupType, "key">, "children"> {
    path?: string
    children?: CustomItemType[]

}

export interface CustomMenuItemType extends Omit<MenuItemType, "key"> {
    path?: string
}


export type CustomItemType = CustomMenuItemType | CustomSubMenuType | CustomMenuItemGroupType | null

export const convertCustomItemTypesToItemTypes = (from: CustomItemType[], parentPath: string | null): ItemType[] => {
    return (from || []).map((opt, index) => {
        if (opt && typeof opt === "object") {
            const {label, children, path, type, ...restProps} = opt as any;
            const mergedKey = path ?? `tmp-${index}`;

            let combineKey;

            if (path && parentPath)
                combineKey = parentPath + path
            else if (path)
                combineKey = path
            else if (parentPath)
                combineKey = parentPath

            if (children || type === 'group') {
                if (type === 'group') {
                    return {
                        label: label,
                        key: mergedKey,
                        type: type,
                        ...restProps,
                        children: convertCustomItemTypesToItemTypes(children, parentPath)
                    }
                }


                return {
                    label: label,
                    key: combineKey,
                    children: convertCustomItemTypesToItemTypes(children, combineKey),
                    ...restProps
                }
            }

            return {
                label: label,
                key: combineKey,
                ...restProps
            };
        }

        return null;
    }).filter((opt) => opt != null)
};

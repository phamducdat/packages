import React from "react";
import {MenuItemType, SubMenuType} from "antd/es/menu/hooks/useItems";


export interface CustomSubMenuType extends Omit<Omit<SubMenuType, "key">, "children"> {
    path?: string,
    children?: CustomSubMenuType[]

}

export interface CustomMenuItemType extends Omit<MenuItemType, "key"> {
    path?: string
}
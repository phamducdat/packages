import React from 'react';
import {Menu, MenuProps} from "antd";
import {CustomMenuItemType, CustomSubMenuType} from "./CustomMenuItemType";
import {convertCustomItemTypesToItemTypes} from "./utils";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomMenuItemType[] | CustomSubMenuType[]

}

const CustomMenu: React.FC<CustomMenuProps> = (props) => {


    const test: CustomMenuItemType[] = [
        {}
    ]


    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(test)}
            />
        </div>
    );
};

export default CustomMenu;

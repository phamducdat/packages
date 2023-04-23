import React from 'react';
import {Menu, MenuProps} from "antd";
import {CustomMenuItemType} from "./CustomMenuItemType";
import {convertCustomMenuItemToMenuItem} from "./utils";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomMenuItemType[]

}

const CustomMenu: React.FC<CustomMenuProps> = (props) => {


    const test: CustomMenuItemType[] = [
        {}
    ]


    return (
        <div>
            <Menu
                items={convertCustomMenuItemToMenuItem(test)}
            />
        </div>
    );
};

export default CustomMenu;

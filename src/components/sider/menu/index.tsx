import React from 'react';
import {Menu, MenuProps} from "antd";
import {CustomMenuItemProps} from "./CustomMenuItemProps";
import {convertCustomMenuItemToMenuItem} from "./utils";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomMenuItemProps[]

}

const CustomMenu: React.FC<CustomMenuProps> = (props) => {


    const test: CustomMenuItemProps[] = [
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

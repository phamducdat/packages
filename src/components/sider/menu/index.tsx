import React from 'react';
import {Menu, MenuProps} from "antd";
import {CustomMenuItemTypeProps} from "./CustomMenuItemTypeProps";
import {convertCustomMenuItemToMenuItem} from "./utils";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomMenuItemTypeProps[]

}

const CustomMenu: React.FC<CustomMenuProps> = (props) => {


    const test: CustomMenuItemTypeProps[] = [
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

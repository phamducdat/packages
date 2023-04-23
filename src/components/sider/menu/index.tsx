import React from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./utils";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[]
}

const CustomMenu: React.FC<CustomMenuProps> = (props) => {

    const items = props.items ?? []


    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(items)}
            />
        </div>
    );
};

export default CustomMenu;

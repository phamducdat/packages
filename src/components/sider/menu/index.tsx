import React from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[]
    path?: string
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

import React from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[] | []
    path?: string
}

const CustomMenu: React.FC<CustomMenuProps> = ({items = [], path, ...restProps}) => {


    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(items)}
                {...restProps}
            />
        </div>
    );
};

export default CustomMenu;

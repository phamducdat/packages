import React from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";
import {useMenuPath} from "./hooks/useMenuPath";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[] | []
    path?: string
}

const CustomMenu: React.FC<CustomMenuProps> = ({items = [], path, ...restProps}) => {

    const {selectedKeys, openKeys} = useMenuPath(path || "");

    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(items)}
                onSelect={(value: any) => {
                    console.log("dat with value = ", value)
                }}
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                {...restProps}
            />
        </div>
    );
};

export default CustomMenu;

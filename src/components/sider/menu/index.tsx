import React, {useState} from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";
import {useMenuPath} from "./hooks/useMenuPath";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[] | []
    path?: string
}

const CustomMenu: React.FC<CustomMenuProps> = ({items = [], path, ...restProps}) => {

    const [currentPath, setCurrentPath] = useState(path || "")
    const {selectedKeys, openKeys} = useMenuPath(currentPath || "");


    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(items)}
                onOpenChange={(value: any) => {
                    console.log("dat with onOpenChange = ", value)
                }}
                onSelect={(value: any) => {
                    console.log("dat with value = ", value)

                    const keyPath = value.keyPath
                    const path = keyPath.filter((p: any) => p).reverse().join('/');
                    console.log("dat with path = ", path)
                    setCurrentPath(path)

                }}
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                {...restProps}
            />
        </div>
    );
};

export default CustomMenu;

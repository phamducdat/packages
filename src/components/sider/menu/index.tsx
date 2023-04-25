import React, {useEffect, useState} from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[] | []
    path?: string
}

const CustomMenu: React.FC<CustomMenuProps> = ({items = [], path, ...restProps}) => {

    const [currentPath, setCurrentPath] = useState(path || "")
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    useEffect(() => {
        if (currentPath) {

            const pathSegments = currentPath.split('/').filter((i) => i);

            const lastSegment = pathSegments.pop();
            const restSegment = pathSegments
            setSelectedKeys([`/${lastSegment}`])
            setOpenKeys(restSegment.map(element => {
                return "/" + element
            }))
        }
    }, [currentPath])


    return (
        <div>
            <Menu
                items={convertCustomItemTypesToItemTypes(items)}
                onOpenChange={(value: any) => {
                    setOpenKeys(value)
                }}
                onSelect={(value: any) => {

                    const keyPath = value.keyPath
                    const path = keyPath.filter((p: any) => p).reverse().join('');
                    setCurrentPath(path)
                }}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                // openKeys={openKeys}
                {...restProps}
            />
        </div>
    );
};

export default CustomMenu;

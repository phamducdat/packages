import React, {useEffect, useState} from 'react';
import {Menu, MenuProps} from "antd";
import {convertCustomItemTypesToItemTypes, CustomItemType} from "./hooks/useCustomItems";
import {useLocation, useNavigate} from "react-router-dom";

export interface CustomMenuProps extends Omit<MenuProps, 'items'> {
    items?: CustomItemType[] | []
    path?: string
}

const CustomMenu: React.FC<CustomMenuProps> = ({items = [], path, ...restProps}) => {
    const location = useLocation()
    const pathname = location.pathname
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    let navigate = useNavigate()

    useEffect(() => {
        if (pathname) {

            const pathSegments = pathname.split('/').filter((i) => i);

            const lastSegment = pathSegments.pop();
            const restSegment = pathSegments
            setSelectedKeys([`/${lastSegment}`])
            setOpenKeys(restSegment.map(element => {
                return "/" + element
            }))
        }
    }, [pathname])


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
                    navigate(path)
                    // setCurrentPath(path)
                }}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                {...restProps}
            />
        </div>
    );
};

export default CustomMenu;

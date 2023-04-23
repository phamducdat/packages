import React from "react";
import {SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";
import CustomMenu from "./menu";
import {CustomMenuItemType} from "./menu/CustomMenuItemType";


export interface CustomSiderProps extends SiderProps {
    items?: CustomMenuItemType[]
}

const CustomSider: React.FC<CustomSiderProps> = props => {
    return (
        <>
            <Sider
                {...props}
            >
                <CustomMenu
                    items={props.items}
                />
            </Sider>
        </>
    );
};

export default CustomSider;
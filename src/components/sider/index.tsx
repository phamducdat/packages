import React from "react";
import {SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";
import CustomMenu, {CustomMenuProps} from "./menu";


export interface CustomSiderProps extends Omit<SiderProps, 'children'> {
    menuProps: CustomMenuProps
}

const CustomSider: React.FC<CustomSiderProps> = ({menuProps, ...siderProps}) => {

    return (
        <>
            <Sider
                {...siderProps}
            >
                <CustomMenu
                    {...menuProps}
                />
            </Sider>
        </>
    );
};

export default CustomSider;
import React from "react";
import {SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";
import CustomMenu from "./menu";


export interface CustomSiderProps extends SiderProps {

}

const CustomSider: React.FC<CustomSiderProps> = props => {
    return (
        <>
            <Sider
                {...props}
            >
                <CustomMenu
                />
            </Sider>
        </>
    );
};

export default CustomSider;
import React from "react";
import {SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";


export interface CustomSiderProps extends SiderProps {


}

const CustomSider: React.FC<CustomSiderProps> = props => {
    return (
        <>
            <Sider
                {...props}
            />
        </>
    );
};

export default CustomSider;
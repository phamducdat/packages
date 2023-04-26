import React from "react";
import {SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";


const CustomSider: React.FC<SiderProps> = props => {

    return (
        <>
            <Sider
                {...props}
            >

            </Sider>
        </>
    );
};

export default CustomSider;

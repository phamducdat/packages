import React from "react";
import {SiderProps} from "antd/lib";
import Sider from "antd/es/layout/Sider";
import {MenuProps} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import DP_Menu from "./menu";


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
const DP_Sider: React.FC<SiderProps> = (props) => {

    return (
        <>
            <Sider {...props}>
                <DP_Menu
                    items={items2}
                />
            </Sider>
        </>
    )
}

export default DP_Sider;

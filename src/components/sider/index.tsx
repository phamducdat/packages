import React from "react";
import {Menu, MenuProps, SiderProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

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

export interface CustomSiderProps extends SiderProps {


}

const CustomSider: React.FC<CustomSiderProps> = props => {
    return (
        <>
            <Sider
                {...props}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items2}
                />
            </Sider>
        </>
    );
};

export default CustomSider;
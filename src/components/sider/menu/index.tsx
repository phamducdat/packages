import {Menu, MenuProps} from "antd";
import React from "react";
import {convertToMenuItems} from "./utils";

export interface DP_MenuProps extends MenuProps {

}

const DP_Menu: React.FC<DP_MenuProps> = props => {

    return (
        <>

            <Menu {...props}
            items={convertToMenuItems(null)}
            >

            </Menu>
        </>)
}

export default DP_Menu
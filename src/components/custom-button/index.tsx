import React from "react";
import {Button, ButtonProps} from "antd";

export interface CustomButtonProps extends ButtonProps {

    name?: string;
    firstName?: string

}

const CustomButton: React.FC<CustomButtonProps> = (props) => {

    return (
        <>
            <Button
                {...props}
            >
                {props.name}
            </Button>
        </>
    )

}

export default CustomButton
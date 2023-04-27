import {Button, ButtonProps} from "antd";
import React from "react";


export interface CustomButtonProps extends ButtonProps {

}

const CustomButton: React.FC<CustomButtonProps> = props => {
    return (
        <>
            <div>
                <Button {...props}/>
            </div>
        </>
    );
};
export default CustomButton;

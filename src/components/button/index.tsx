import {Button, ButtonProps} from "antd";
import React from "react";
import scssClasses from './styles.module.scss';


export interface CustomButtonProps extends ButtonProps {
    firstName?: string;
    lastName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = props => {
    return (
        <>
            <div className={scssClasses.datpd}>
                <Button {...props}/>
            </div>
        </>
    );
};
export default CustomButton;

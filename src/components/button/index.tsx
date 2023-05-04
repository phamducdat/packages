import { Button, ButtonProps } from 'antd';
import React from 'react';

export type CustomButtonProps = ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <>
      <div>
        <Button {...props} />
      </div>
    </>
  );
};
export default CustomButton;

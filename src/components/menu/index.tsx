import { Menu as AntMenu, MenuProps } from 'antd';
import React from 'react';
import MenuPath, { MenuPathProps } from './MenuPath';

const Menu: React.FC<MenuProps> & { Path: React.FC<MenuPathProps> } = (
  props
) => {
  return <AntMenu {...props} />;
};

Menu.Path = MenuPath;

export default Menu;

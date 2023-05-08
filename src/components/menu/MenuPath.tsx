import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import {
  convertCustomItemTypesToItemTypes,
  ItemPathType,
} from './hooks/usePathItems';

export interface MenuPathProps extends Omit<MenuProps, 'items'> {
  items?: ItemPathType[] | [];
  path: string;
  onPathChange?: (path: string) => void;
}

const MenuPath: React.FC<MenuPathProps> = ({
  items = [],
  path,
  onPathChange,
  ...restProps
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    if (path) {
      const pathSegments = path.split('/').filter((i) => i);
      const lastSegment = pathSegments.pop();
      const restSegment = pathSegments;
      setSelectedKeys([`/${lastSegment}`]);
      setOpenKeys(
        restSegment.map((element) => {
          return '/' + element;
        })
      );
    }
  }, [path]);

  return (
    <div>
      <Menu
        items={convertCustomItemTypesToItemTypes(items)}
        onOpenChange={(value: any) => {
          setOpenKeys(value);
        }}
        onSelect={(value: any) => {
          const keyPath = value.keyPath;
          const path = keyPath
            .filter((p: never) => p)
            .reverse()
            .join('');
          if (onPathChange) {
            onPathChange(path);
          }
        }}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        {...restProps}
      />
    </div>
  );
};

export default MenuPath;

import React from 'react';
import {
  ItemType,
  MenuItemGroupType,
  MenuItemType,
  SubMenuType,
} from 'antd/es/menu/hooks/useItems';

export interface SubMenuPathType
  extends Omit<Omit<SubMenuType, 'key'>, 'children'> {
  path?: string;
  children?: ItemPathType[];
}

export interface MenuItemGroupPathType
  extends Omit<Omit<MenuItemGroupType, 'key'>, 'children'> {
  path?: string;
  children?: ItemPathType[];
}

export interface MenuItemPathType extends Omit<MenuItemType, 'key'> {
  path?: string;
}

export type ItemPathType =
  | MenuItemPathType
  | SubMenuPathType
  | MenuItemGroupPathType
  | null;

export const convertCustomItemTypesToItemTypes = (
  from: ItemPathType[]
): ItemType[] => {
  return (from || [])
    .map((opt, index) => {
      if (opt && typeof opt === 'object') {
        const { label, children, path, type, ...restProps } = opt as any;
        const mergedKey = path ?? `tmp-${index}`;
        if (children || type === 'group') {
          if (type === 'group') {
            return {
              label: label,
              key: mergedKey,
              type: type,
              ...restProps,
              children: convertCustomItemTypesToItemTypes(children),
            };
          }
          return {
            label: label,
            key: path,
            children: convertCustomItemTypesToItemTypes(children),
            ...restProps,
          };
        }
        return {
          label: label,
          key: path,
          ...restProps,
        };
      }

      return null;
    })
    .filter((opt) => opt != null);
};

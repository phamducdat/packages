import React from 'react';
import { Tabs as AntTabs, TabsProps as AntTabsProps } from 'antd';

export type TabsProps = AntTabsProps;
const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div>
      <AntTabs />
    </div>
  );
};

export default Tabs;

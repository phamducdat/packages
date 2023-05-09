import React from 'react';
import { Tabs as AntTabs, TabsProps as AntTabsProps } from 'antd';
import { useSearchParams } from 'react-router-dom';

export type TabsProps = Omit<AntTabsProps, 'activeKey'>;

const Tabs: React.FC<TabsProps> = ({ onChange, ...restProps }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnChange = (value: string) => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set('tab-key', value);
    setSearchParams(currentSearchParams);

    if (onChange) onChange(value);
  };

  return (
    <div>
      <AntTabs
        {...restProps}
        activeKey={searchParams.get('tab-key') ?? undefined}
        key={searchParams.get('tab-key') !== null ? 'dp' : 'test'}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Tabs;

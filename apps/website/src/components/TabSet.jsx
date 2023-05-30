import React from 'react';

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const TabSet = ({ tabs, ...props }) => {
  const makeTab = ({ Content, label, value, ...args }) => {
    return (
      <TabItem label={label} value={value || label.toLowerCase()} {...args}>
        <Content />
      </TabItem>
    )
  }

  return (<Tabs groupId="state" queryString {...props}>{tabs.map(makeTab)}</Tabs>)
}

export default TabSet


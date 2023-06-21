import React from 'react';

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const getValue = ({ value, label }) => {
  return value || label.toLowerCase()
}

const TabSet = ({ tabs, ...props }) => {
  const makeTab = ({ Content, label, ...args }, index) => {
    const value = getValue({ ...args, label })
    const key = `tabs-tab-${value}`
    return (
      <TabItem key={key} default={index === 0} label={label} value={value} {...args}>
        <Content />
      </TabItem>
    )
  }

  return (<Tabs queryString="tab" {...props}>{tabs.map(makeTab)}</Tabs>)
}

export default TabSet


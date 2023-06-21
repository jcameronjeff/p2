import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import StopLightList from '@site/src/components/StopLightList';
import Kitchen from '@site/src/components/Kitchen/components/Kitchen';
import TabSet from '@site/src/components/TabSet';
import clsx from 'clsx';

export default {
  ...MDXComponents,
  clsx,
  Kitchen,
  StopLightList,
  TabSet,
};

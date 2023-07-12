import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import StopLightList from '@site/src/components/StopLightList';
import { Kitchen } from '@site/src/components/Kitchen';
import Ipsum from '@site/src/components/Ipsum';
import TabSet from '@site/src/components/TabSet';
import clsx from 'clsx';
import * as Icon from '@prism2/icons-react/interstate';


export default {
  ...MDXComponents,
  ...Icon,
  clsx,
  Kitchen,
  Ipsum,
  StopLightList,
  TabSet,
};

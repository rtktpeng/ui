/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Tabs } from '../Tabs';

// @ts-ignore
import mdx from './Tabs.mdx';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Tabs defaultSelectedItem="2">
    <Tabs.Item title="Tab 1" itemKey="1" />
    <Tabs.Item title="Tab 2" itemKey="2" />
    <Tabs.Item title="Tab 3" itemKey="3" />
  </Tabs>
);

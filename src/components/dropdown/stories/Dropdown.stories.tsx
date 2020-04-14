/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Dropdown } from '../Dropdown';
import { Menu } from '../../menu/Menu';

// @ts-ignore
import mdx from './Dropdown.mdx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const overlay = (
  <Menu>
    <Menu.Item itemKey={'1'}>Item 1</Menu.Item>
    <Menu.Item itemKey={'2'}>Item 2</Menu.Item>
    <Menu.Item itemKey={'3'}>Item 3</Menu.Item>
  </Menu>
);

export const simple = () => <Dropdown overlay={overlay}>Hover Me</Dropdown>;

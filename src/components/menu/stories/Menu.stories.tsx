/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';

import Plus from '../../icons/Plus';

// @ts-ignore
import mdx from './Menu.mdx';

const Container = styled.div`
  background: white;

  max-width: 300px;
`;

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Container>
    <Menu onClick={key => console.log(key)}>
      <Menu.Item itemKey={'1'}>Item 1</Menu.Item>
      <Menu.SubMenu title="Item 2" itemKey="sub-menu-1">
        <Menu.ItemGroup title="Group 1">
          <Menu.Item itemKey={'2'}>Sub Item 1</Menu.Item>
          <Menu.Item itemKey={'3'}>Sub Item 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item itemKey={'4'}>Sub Item 3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item itemKey={'5'}>Item 3</Menu.Item>
      <Menu.Item itemKey={'6'}>Item 4</Menu.Item>
    </Menu>
  </Container>
);

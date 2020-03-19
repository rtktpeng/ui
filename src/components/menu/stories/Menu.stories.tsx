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
    <Menu>
      <Menu.Item itemKey={'1'} disabled>
        Item 1
      </Menu.Item>
      <Menu.Item itemKey={'2'}>Item 2</Menu.Item>
      <Menu.Item itemKey={'3'}>Item 3</Menu.Item>
      <Menu.Item itemKey={'4'}>Item 4</Menu.Item>
      <Menu.Item itemKey={'5'}>Item 5</Menu.Item>
      <Menu.Item itemKey={'6'}>Item 6</Menu.Item>
    </Menu>
  </Container>
  // your component story here
);

/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Dropdown } from '../Dropdown';

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

export const simple = () => <Dropdown />;

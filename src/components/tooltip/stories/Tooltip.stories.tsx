/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Tooltip } from '../Tooltip';

// @ts-ignore
import mdx from './Tooltip.mdx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => <Tooltip>asdfasdfasdasd</Tooltip>;

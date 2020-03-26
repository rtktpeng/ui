/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Table } from '../Table';

// @ts-ignore
import mdx from './Table.mdx';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => <Table />;

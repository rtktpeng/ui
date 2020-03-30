/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Table } from '../Table';

import { Icon } from '../../icons/index';

// @ts-ignore
import mdx from './Table.mdx';

import { ColumnProps } from '../types';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  interface User {
    key: string | number;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnProps[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      width: 15,
      justify: 'center',
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => (
        <span>
          <Icon.Times />
        </span>
      ),
      width: 5,
      justify: 'flex-end',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 61,
      address: 'British Columbia No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 27,
      address: 'Ontario No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Flack',
      age: 40,
      address: 'Winnepeg No. 1 Lake Park',
    },
  ];

  return <Table<User> data={data} columns={columns} />;
};

/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Table, ColumnProps } from '../Table';

import { Icon } from '../../icons/index';

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

export const simple = () => {
  const [tableData, setTableData] = React.useState<User[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 61,
      address: 'British Columbia No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 70,
      address: 'Ontario No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Flack',
      age: 40,
      address: 'Winnepeg No. 1 Lake Park',
    },
  ]);

  interface User {
    key: string | number;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnProps<User>[] = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 15,
      sortable: true,
    },
    {
      key: 'age',
      dataIndex: 'age',
      title: 'Age',
      width: 15,
      justify: 'center',
      sortable: true,
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

  const sortAlpabetical = reverse => {
    if (reverse) {
      return tableData.sort((b, a) => {
        return a.name.localeCompare(b.name);
      });
    }
    return tableData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  };

  const sortNumerical = reverse => {
    if (reverse) {
      return tableData.sort((a, b) => b.age - a.age);
    }
    return tableData.sort((a, b) => a.age - b.age);
  };

  const handleSort = React.useCallback(
    (column, state) => {
      switch (column) {
        case 'name': {
          const newData = sortAlpabetical(state === 'dsc');
          setTableData([...newData]);
          break;
        }
        case 'age': {
          const newData = sortNumerical(state === 'dsc');
          setTableData([...newData]);
          break;
        }
      }
    },
    [tableData, setTableData]
  );

  return <Table<User> data={tableData} columns={columns} onSort={handleSort} />;
};

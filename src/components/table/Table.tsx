import * as React from 'react';

import styled from 'styled-components';

import { SortState } from '../icons';

import { Header } from './Header';

import { Body } from './Body';

export type Justify = 'flex-start' | 'center' | 'flex-end';

export interface ColumnProps<T> {
  key: string | number;
  title: React.ReactNode;
  dataIndex?: string;
  render?: (data: T) => React.ReactNode; // TODO: update the type of data here
  justify?: Justify;
  width?: number;
  sortable?: boolean;
}

export interface TableProps<T> {
  /** className of the table component */
  className?: string;

  /** array of columns to render */
  columns: Array<ColumnProps<T>>;

  /** data to show in the table where T is the type of data to show */
  data: T[];

  /** callback that is called when a column is clicked to sort */
  onSort?: (key: string, state: SortState) => void;
}

const Container = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const Table = <T extends any = any>(props: TableProps<T>) => {
  const [sortColumn, setSortColumn] = React.useState(null);

  const { className, columns, data, onSort } = props;

  const handleSort = React.useCallback(
    (key, state) => {
      if (onSort) {
        onSort(key, state);
        setSortColumn(key);
      }
    },
    [onSort]
  );

  return (
    <Container className={`${className} rtk-table`}>
      <Header columns={columns} onSort={handleSort} sortColumn={sortColumn} />
      <Body columns={columns} data={data} />
    </Container>
  );
};

Table.displayName = 'Table';

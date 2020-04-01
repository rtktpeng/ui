import * as React from 'react';

import styled from 'styled-components';

import { SortState } from '../icons';

import { Header } from './Header';

import { Body } from './Body';

export type Justify = 'flex-start' | 'center' | 'flex-end';

export interface ColumnProps<T> {
  /** unique key of the column */
  key: string | number;

  /** title of the column */
  title: React.ReactNode;

  /** the index of the data to render in the column */
  dataIndex?: string;

  /** allows for customization of what is rendered in the column where `data` is the record for the row */
  render?: (data: T) => React.ReactNode;

  /** choose how to align text/components in the column */
  justify?: Justify;

  /** set the width to a percentage of total width of table */
  width?: number;

  /** if true, the column will be sortable and be provided in the `onSort` callback when clicked */
  sortable?: boolean;
}

export interface TableProps<T> {
  /** className of the table component */
  className?: string;

  /** array of columns to render */
  columns: ColumnProps<T>[];

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
      <Header<T>
        columns={columns}
        onSort={handleSort}
        sortColumn={sortColumn}
      />
      <Body<T> columns={columns} data={data} />
    </Container>
  );
};

Table.displayName = 'Table';

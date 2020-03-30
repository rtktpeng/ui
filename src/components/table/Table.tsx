import * as React from 'react';

import styled from 'styled-components';

import { Header } from './Header';

import { Body } from './Body';

import { ColumnProps } from './types';

export interface TableProps<T> {
  /** className of the table component */
  className?: string;

  /** Array of columns to render */
  columns: ColumnProps[];

  /** Data to show in the table where T is the type of data to show*/
  data: T[];
}

const Container = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const Table = <T extends object = any>(props: TableProps<T>) => {
  const { className, columns, data } = props;

  return (
    <Container className={`${className} rtk-table`}>
      <Header columns={columns} />
      <Body columns={columns} data={data} />
    </Container>
  );
};

Table.displayName = 'Table';

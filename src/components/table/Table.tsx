import * as React from 'react';

import styled from 'styled-components';

export interface TableProps {
  /** className of the table component */
  className?: string;
}

const Container = styled.div``;

export const Table: React.FunctionComponent<TableProps> = ({
  children,
  className,
}) => {
  return (
    <Container className={`${className} rtk-table `}>{children}</Container>
  );
};

Table.displayName = 'Table';

import * as React from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '../typography/Typography';

import { Cell } from './Cell';

import { ColumnProps } from './Table';

import { GlobalTheme } from '../../theme/types';

interface BodyProps<T> {
  columns: ColumnProps<T>[];
  data: T[];
}

const TD = styled.td<{
  theme: GlobalTheme;
}>`
  ${({ theme }) => css`
    border-bottom: ${theme.tableBodyRowBorder};
    border-color: ${theme.tableBodyRowBorderColor};
  `}
`;

export const Body = <T extends any = any>(props: BodyProps<T>) => {
  const { columns, data } = props;

  const renderDataIndex = React.useCallback((column, data) => {
    if (column.dataIndex == null) {
      console.warn(
        `You must supply a dataIndex or render function for column: ${column.name}`
      ); // eslint-disable-line no-console
      return null;
    } else {
      return data[column.dataIndex];
    }
  }, []);

  return (
    <tbody>
      {data.map(d => (
        <tr key={d.key}>
          {columns.map(c => (
            <TD key={c.key}>
              <Cell justify={c.justify}>
                <Typography.Body>
                  {c.render == null ? renderDataIndex(c, d) : c.render(d)}
                </Typography.Body>
              </Cell>
            </TD>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

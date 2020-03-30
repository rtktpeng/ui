import * as React from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '../typography/Typography';

import { Cell } from './Cell';

import { GlobalTheme } from '../../theme/types';

const TD = styled.td<{
  theme: GlobalTheme;
}>`
  ${({ theme }) => css`
    border-bottom: ${theme.tableBodyRowBorder};
    border-color: ${theme.tableBodyRowBorderColor};
  `}
`;

export const Body: React.FunctionComponent<any> = ({ columns, data }) => {
  return (
    <tbody>
      {data.map(d => (
        <tr key={d.key}>
          {columns.map(c => (
            <TD key={c.key} align={c.align}>
              <Cell justify={c.justify}>
                <Typography.Body>
                  {c.render ? c.render(d[c.dataIndex]) : d[c.dataIndex]}
                </Typography.Body>
              </Cell>
            </TD>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

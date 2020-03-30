import * as React from 'react';

import styled, { css } from 'styled-components';

import { ColumnProps } from './types';

import { Typography } from '../typography/Typography';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

import { Cell } from './Cell';

export interface HeaderProps {
  columns: ColumnProps[];
}

const TH = styled.th<{
  theme: GlobalTheme;
  width?: number;
}>`
  ${({ theme, width }) => css`
    margin: 0;
    border-bottom: ${theme.tableHeadBorder};
    border-bottom-color: ${theme.tableHeadBorderColor};
    width: ${`${width}%` || 'auto'};
  `}
`;

const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ columns }) => {
  const theme = useTheme();

  return (
    <thead>
      <tr>
        {columns.map(col => (
          <TH key={col.key} theme={theme} width={col.width}>
            <Cell justify={col.justify} header>
              <Typography.Subtitle>{col.title}</Typography.Subtitle>
            </Cell>
          </TH>
        ))}
      </tr>
    </thead>
  );
};

// we want to reduce the need for a rerender if the columns havent changed.
const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.columns === nextProps.columns;
};

export const Header = React.memo(HeaderComponent, propsAreEqual);

Header.displayName = 'TableHeader';

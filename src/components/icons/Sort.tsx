import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import SortUp from './SortUp';
import SortDown from './SortDown';

export type SortState = 'none' | 'asc' | 'dsc';

export interface SortProps {
  state: SortState;
}

const Container = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const UpContainer = styled.span``;

const DownContainer = styled.span`
  margin-top: -1.5em;
`;

export const Sort: React.FunctionComponent<SortProps> = ({ state }) => {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <Container>
      <UpContainer>
        <SortUp color={state === 'asc' ? primary : undefined} />
      </UpContainer>
      <DownContainer>
        <SortDown color={state === 'dsc' ? primary : undefined} />
      </DownContainer>
    </Container>
  );
};

export default Sort;

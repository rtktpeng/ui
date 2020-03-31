import * as React from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '../typography/Typography';

import { Icon, SortState } from '../icons';
import { GlobalTheme } from '../../theme/types';

import { Cell } from './Cell';

interface StyledCellProps {
  theme: GlobalTheme;
  sortable?: boolean;
}

const getSortState = (currentState: string): SortState => {
  switch (currentState) {
    case 'none':
      return 'asc';
    case 'asc':
      return 'dsc';
    case 'dsc':
      return 'none';
    default:
      return 'none';
  }
};

const StyledCell = styled(Cell)<StyledCellProps>`
  ${({ theme, sortable }) => css`
    transition: background 0.2s ease-in-out;

    ${sortable &&
      css`
        &:hover {
          cursor: pointer;
          background: ${theme.colors.tertiaryBackground};
        }
      `}
  `}
`;

const StyledSubtitle = styled(Typography.Subtitle)`
  display: flex;
  align-items: center;
`;

const SubtitleContent = styled.span`
  margin-right: 8px;
`;

export const HeaderCell: React.FunctionComponent<any> = ({
  justify,
  header,
  itemKey,
  title,
  onClick,
  sortable,
  sortColumn,
  theme,
}) => {
  const [sortState, setSortState] = React.useState<SortState>('none');

  const handleClick = React.useCallback(() => {
    if (sortable) {
      const newSortState = getSortState(sortState);
      onClick(itemKey, newSortState);
      setSortState(newSortState);
    }
  }, [onClick, itemKey, sortState, sortable]);

  // want to reset the sort state to remove the styles
  React.useEffect(() => {
    if (sortColumn !== itemKey) {
      setSortState('none');
    }
  }, [itemKey, sortColumn]);

  return (
    <StyledCell
      sortable={sortable}
      onClick={handleClick}
      justify={justify}
      header={header}
      theme={theme}
    >
      <StyledSubtitle>
        <SubtitleContent>{title}</SubtitleContent>
        {sortable && <Icon.Sort state={sortState} />}
      </StyledSubtitle>
    </StyledCell>
  );
};

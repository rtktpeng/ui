import * as React from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '../typography/Typography';

export interface SubMenuProps {
  /** className of the sub menu */
  className?: string;

  /** Title of the sub menu */
  title: React.ReactNode;

  /** Unique key for the sub menu */
  itemKey: string | number;
}

const Container = styled.div`
  ${({}) => css`
    padding: 0px 16px;
  `}
`;

export const SubMenu: React.FunctionComponent<SubMenuProps> = ({
  className,
  children,
  itemKey,
  title,
}) => {
  return (
    <Container className={`${className} rtk-menu-sub-menu`} key={itemKey}>
      <Typography.Body>{title}</Typography.Body>
      {children}
    </Container>
  );
};

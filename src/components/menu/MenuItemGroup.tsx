import * as React from 'react';

import styled, { css } from 'styled-components';

export interface MenuItemGroupProps {
  /** className of the menu item group */
  className?: string;

  /** Title of the item group */
  title: React.ReactNode;
}

const Container = styled.div`
  ${({}) => css`
    padding: 0px 8px;
  `}
`;

export const MenuItemGroup: React.FunctionComponent<MenuItemGroupProps> = ({
  className,
  children,
  title,
}) => {
  return (
    <Container className={`${className} rtk-menu-item-group`}>
      <div>{title}</div>
      {children}
    </Container>
  );
};

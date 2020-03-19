import * as React from 'react';

import styled from 'styled-components';

import { MenuItem, MenuItemProps } from './MenuItem';

import { MenuContext } from './MenuContext';

export interface MenuFunctionComponent<T> extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<MenuItemProps>;
  SubMenu?: React.FunctionComponent<any>;
  Divider?: React.FunctionComponent<any>;
}

export interface MenuProps {
  /** className of the menu */
  className?: string;

  /** Called when any of the menu items are clicked */
  onClick?: (itemKey: string | number) => void;
}

const Container = styled.div`
  padding: 8px 0px;
`;

export const Menu: MenuFunctionComponent<MenuProps> = ({
  className,
  children,
  onClick,
}) => {
  const handleItemClick = React.useCallback(
    (key: string | number) => {
      if (onClick) {
        onClick(key);
      }
    },
    [onClick]
  );

  return (
    <MenuContext.Provider
      value={{
        onClick: handleItemClick,
      }}
    >
      <Container className={`${className} rtk-menu`}>{children}</Container>
    </MenuContext.Provider>
  );
};

Menu.Item = MenuItem;
// Menu.SubMenu = 'submenu';
// Menu.Divider = 'divider';

// Menu
// onClick - returns the menu key that was clicked
// Menu.Item
// takes children
// itemKey
// disabled
// Menu.SubMenu
// title
// key
// Menu.Divider

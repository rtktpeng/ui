import * as React from 'react';

import styled, { css } from 'styled-components';

import { GlobalTheme } from '../../theme/types';

import { TabsContext } from './TabsContext';

import { TabsItem, TabsItemProps } from './TabsItem';

import { ActiveItem } from './types';

import { useTheme } from '../../hooks/useTheme';

export interface TabsFunctionComponent<T> extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<TabsItemProps>;
}

export interface TabsProps {
  /** className of the tabs component */
  className?: string;

  /** the default selected tab item on initial render */
  defaultSelectedItem?: string | number;

  /** callback to handle when a tab item is clicked */
  onTabClick?: (key: string | number) => void;

  /** placement of the tabs */
  placement?: 'top';

  /** the currently selected tab item */
  selectedItem?: string | number;
}

interface StyledTabsContainerProps {
  placement?: 'top';
  theme: GlobalTheme;
}

const Container = styled.div`
  position: relative;
`;

const TabsContainer = styled.div<StyledTabsContainerProps>`
  ${({ placement, theme }) => css`
    ${placement === 'top' &&
      css`
        display: flex;
        align-items: center;
        width: auto;
      `}
  `}
`;

const Inkbar = styled.div`
  position: absolute;
  background: orange;
  height: 4px;
  width: 100px;

  transition: left 0.2s ease-in-out;
`;

export const Tabs: TabsFunctionComponent<TabsProps> = ({
  selectedItem,
  className,
  children,
  defaultSelectedItem,
  onTabClick,
  placement,
}) => {
  const [activeItem, setActiveItem] = React.useState<ActiveItem>();

  const theme = useTheme();

  const handleTabClick = React.useCallback(
    (key, { target }) => {
      if (onTabClick) {
        onTabClick(key);
      }

      setActiveItem({
        itemKey: key,
        // @ts-ignore
        width: target.offsetWidth,
        // @ts-ignore
        x: target.offsetLeft,
      });
    },
    [onTabClick]
  );

  console.log(activeItem);

  return (
    <TabsContext.Provider
      value={{
        defaultSelectedItem,
        setActiveItem,
        onClick: handleTabClick,
      }}
    >
      <Container>
        <TabsContainer
          className={`${className} rtk-tabs`}
          placement={placement}
          theme={theme}
        >
          {children}
        </TabsContainer>
        {activeItem == null ? null : (
          <Inkbar
            style={{
              width: activeItem.width,
              left: activeItem.x,
            }}
          />
        )}
      </Container>
    </TabsContext.Provider>
  );
};

Tabs.Item = TabsItem;

Tabs.defaultProps = {
  placement: 'top',
};

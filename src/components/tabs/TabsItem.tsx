import * as React from 'react';

import styled, { css } from 'styled-components';

import { Typography } from '../typography/Typography';

import { TabsContext } from './TabsContext';

import { useTheme } from '../../hooks/useTheme';

export interface TabsItemProps {
  /** className of the tabs item component */
  className?: string;

  /** unique identifier for the tab items */
  itemKey: string | number;

  /** title of the tab item */
  title: React.ReactNode;
}

const Container = styled.div`
  ${({ theme }) => css``}
`;

const Title = styled(Typography.Body)<{ theme: any }>`
  ${({ theme }) => css`
    user-select: none;
    padding: 8px 16px;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity ${theme.animationTimeVeryFast}s ease-in-out;

    &:hover {
      opacity: 1;
    }
  `}
`;
export const TabsItem: React.FunctionComponent<TabsItemProps> = ({
  className,
  itemKey,
  title,
}) => {
  const tabItemRef = React.useRef(null);

  const theme = useTheme();

  const { onClick, defaultSelectedItem, setActiveItem } = React.useContext(
    TabsContext
  );

  const handleClick = React.useCallback(
    e => {
      if (onClick) {
        onClick(itemKey, e);
      }
    },
    [onClick, itemKey]
  );

  React.useEffect(() => {
    if (defaultSelectedItem === itemKey && tabItemRef.current !== null) {
      setActiveItem({
        itemKey,
        // @ts-ignore
        width: tabItemRef.current.offsetWidth,
        // @ts-ignore
        x: tabItemRef.current.offsetLeft,
      });
    }
  }, []);

  return (
    <Container
      ref={tabItemRef}
      className={`${className} rtk-tabs-item`}
      onClick={handleClick}
    >
      <Title theme={theme}>{title}</Title>
    </Container>
  );
};

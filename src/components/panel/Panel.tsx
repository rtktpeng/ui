import * as React from 'react';

import styled, { css } from 'styled-components';

import { MouseEventHandler } from 'react';

import { useTheme } from '../../hooks';

export interface PanelProps {
  /** Content to show in the panel */
  children?: React.ReactNode;

  /** classname for the panel */
  className?: string;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Container = styled.div`
  background: ${({ theme }) => theme.panelBackground};
  border: ${({ theme }) => theme.panelBorder};
  border-color: ${({ theme }) => theme.panelBorderColor};
  border-radius: ${({ theme }) => theme.panelBorderRadius};
  padding: ${({ theme }) => theme.panelPadding};
  margin: ${({ theme }) => theme.panelMargin};

  transition: box-shadow ${({ theme }) => theme.animationTimeFast}s;

  ${props =>
    props.onClick !== undefined &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.panelHoverBoxShadow};
      }
      &:active {
        box-shadow: ${props => props.theme.panelActiveBoxShadow};
      }
    `}
`;

export const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  className,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-panel`}
      onClick={onClick}
      theme={theme}
    >
      {children}
    </Container>
  );
};

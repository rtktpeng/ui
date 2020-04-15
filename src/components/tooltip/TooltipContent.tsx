import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { position } from './placements';

import { GlobalTheme } from '../../theme/types';

interface TooltipContainerProps {
  position: position;
  theme: GlobalTheme;
}

interface OverlayContainerProps {
  theme: GlobalTheme;
}

interface ArrowProps {
  position: position;
  theme: GlobalTheme;
}

interface FloaterContentProps {
  position: position;
}

export const TooltipContainer = styled.div`
  ${({ position, theme }: TooltipContainerProps) => css`
    position: relative;

    ${(position === 'top' ||
      position === 'topLeft' ||
      position === 'topRight') &&
      css`
        padding-bottom: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-bottom: 4px;
      `}

    ${(position === 'right' ||
      position === 'rightTop' ||
      position === 'rightBottom') &&
      css`
        padding-left: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-left: 4px;
      `}

    ${(position === 'bottom' ||
      position === 'bottomRight' ||
      position === 'bottomLeft') &&
      css`
        padding-top: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-top: 4px;
      `}

    ${(position === 'left' ||
      position === 'leftTop' ||
      position === 'leftBottom') &&
      css`
        padding-right: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-right: 4px;
      `}
  `}
`;

export const OverlayContainer = styled.div`
  ${({ theme }: OverlayContainerProps) => css`
    background: ${theme.colors.primaryBackground};
    box-shadow: ${theme.tooltipBoxShadow};
    border-radius: 5px;
    border: ${theme.tooltipBorder};
    border-color: ${theme.colors.border};
  `}
`;

export const Arrow = styled.div`
  ${({ position, theme }: ArrowProps) => css`
    position: absolute;
    width: ${theme.tooltipArrowSize};
    height: ${theme.tooltipArrowSize};
    background: ${theme.colors.primaryBackground};
    transform: rotate(45deg);

    /* Arrow pointing down */
    ${(position === 'top' ||
      position === 'topLeft' ||
      position === 'topRight') &&
      css`
        border-right: ${theme.tooltipBorder};
        border-bottom: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing left */
    ${(position === 'right' ||
      position === 'rightTop' ||
      position === 'rightBottom') &&
      css`
        border-bottom: ${theme.tooltipBorder};
        border-left: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing up */
    ${(position === 'bottom' ||
      position === 'bottomRight' ||
      position === 'bottomLeft') &&
      css`
        border-top: ${theme.tooltipBorder};
        border-left: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing right */
    ${(position === 'left' ||
      position === 'leftTop' ||
      position === 'leftBottom') &&
      css`
        border-top: ${theme.tooltipBorder};
        border-right: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* top arrow positions */
    ${position === 'top' &&
      css`
        bottom: 0px;
        left: calc(50% - 8px);
      `}

    ${position === 'topLeft' &&
      css`
        bottom: 0px;
        left: 20%;
      `}

    ${position === 'topRight' &&
      css`
        bottom: 0px;
        right: 20%;
      `}

    /* right arrow positions */
    ${position === 'rightTop' &&
      css`
        top: 10%;
        left: 0px;
      `}

    ${position === 'right' &&
      css`
        top: calc(50% - 8px);
        left: 0px;
      `}

    ${position === 'rightBottom' &&
      css`
        bottom: 10%;
        left: 0px;
      `}

    /* bottom arrow positions */
    ${position === 'bottomRight' &&
      css`
        top: 0px;
        right: 20%;
      `}

    ${position === 'bottom' &&
      css`
        top: 0px;
        left: calc(50% - 8px);
      `}

    ${position === 'bottomLeft' &&
      css`
        top: 0px;
        left: 20%;
      `}

    /* left arrow positions */
    ${position === 'leftBottom' &&
      css`
        bottom: 10%;
        right: 0px;
      `}

    ${position === 'left' &&
      css`
        top: calc(50% - 8px);
        right: 0px;
      `}

    ${position === 'leftTop' &&
      css`
        top: 10%;
        right: 0px;
      `}
  `}
`;

export const TooltipContent: React.FunctionComponent<FloaterContentProps> = ({
  children,
  position,
}) => {
  const theme = useTheme();

  return (
    <TooltipContainer position={position} theme={theme}>
      <Arrow position={position} theme={theme} />
      <OverlayContainer theme={theme}>{children}</OverlayContainer>
    </TooltipContainer>
  );
};

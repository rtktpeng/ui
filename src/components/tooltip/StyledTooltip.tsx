import styled, { css } from 'styled-components';

import { position } from './placements';

export const FooContainer = styled.div`
  ${({ position }: { position: position }) => css`
    position: relative;

    ${(position === 'top' ||
      position === 'topLeft' ||
      position === 'topRight') &&
      css`
        padding-bottom: 8px;
        margin-bottom: 4px;
      `}

    ${(position === 'right' ||
      position === 'rightTop' ||
      position === 'rightBottom') &&
      css`
        padding-left: 8px;
        margin-left: 4px;
      `}

    ${(position === 'bottom' ||
      position === 'bottomRight' ||
      position === 'bottomLeft') &&
      css`
        padding-top: 8px;
        margin-top: 4px;
      `}

    ${(position === 'left' ||
      position === 'leftTop' ||
      position === 'leftBottom') &&
      css`
        padding-right: 8px;
        margin-right: 4px;
      `}
  `}
`;

export const OverlayContainer = styled.div`
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const Arrow = styled.div`
  ${({ position }: { position: position }) => css`
    position: absolute;
    width: 0px;
    height: 0px;

    /* Arrow pointing down */
    ${position === 'top' &&
      css`
        bottom: 0px;
        left: calc(50% - 8px);
        border-top: 8px solid blue;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      `}

    /* Arrow pointing left */
    ${position === 'right' &&
      css`
        top: calc(50% - 8px);
        left: 0px;
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-right: 8px solid blue;
      `}

    /* Arrow pointing up */
    ${position === 'bottom' &&
      css`
        top: 0px;
        left: calc(50% - 8px);
        border-bottom: 8px solid blue;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      `}

    /* Arrow pointing right */
    ${position === 'left' &&
      css`
        top: calc(50% - 8px);
        right: 0px;
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-left: 8px solid blue;
      `}
  `}
`;

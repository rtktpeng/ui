import styled, { css } from 'styled-components';

import { position } from './placements';

export const TooltipContainer = styled.div`
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid lightgray;
`;

export const Arrow = styled.div`
  ${({ position }: { position: position }) => css`
    position: absolute;
    width: 0px;
    height: 0px;

    /* Arrow pointing down */
    ${(position === 'top' ||
      position === 'topLeft' ||
      position === 'topRight') &&
      css`
        border-top: 8px solid white;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      `}

    /* Arrow pointing left */
    ${(position === 'right' ||
      position === 'rightTop' ||
      position === 'rightBottom') &&
      css`
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-right: 8px solid white;
      `}

    /* Arrow pointing up */
    ${(position === 'bottom' ||
      position === 'bottomRight' ||
      position === 'bottomLeft') &&
      css`
        border-bottom: 8px solid white;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      `}

    /* Arrow pointing right */
    ${(position === 'left' ||
      position === 'leftTop' ||
      position === 'leftBottom') &&
      css`
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-left: 8px solid white;
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

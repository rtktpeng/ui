import * as React from 'react';

import styled, { css } from 'styled-components';

import { Floater } from '../floater/Floater';

import { placements, position } from './placements';

import { FooContainer, Arrow, OverlayContainer } from './StyledTooltip';

export interface TooltipProps {
  /** className of the dropdown component */
  className?: string;

  /** the position of the tooltip with respect to the trigger node */
  position: position;

  /** trigger to show the dropdown item  */
  trigger?: 'hover' | 'click';

  /** content to show in the dropdown */
  overlay?: React.ReactNode;
}

const Container = styled.span`
  cursor: pointer;
  box-sizing: border-box;
`;

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  className,
  position,
  overlay,
}) => {
  const [open, setOpen] = React.useState(false);
  const fooRef = React.useRef(null);

  const handleMouseEnter = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Container
      ref={fooRef}
      className={`${className} rtk-tooltip`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Floater
        anchorElement={fooRef.current}
        position={placements[position].position}
        open={open && fooRef !== null}
      >
        <FooContainer position={position}>
          <Arrow position={position} />
          <OverlayContainer>{overlay}</OverlayContainer>
        </FooContainer>
      </Floater>
    </Container>
  );
};

Tooltip.displayName = 'Tooltip';

import * as React from 'react';

import styled from 'styled-components';

import { Floater } from '../floater/Floater';

import { placements, placement } from './placements';

import { TooltipContainer } from './TooltipContainer';

export interface TooltipProps {
  /** className of the dropdown component */
  className?: string;

  /** the placement of the tooltip with respect to the trigger node */
  placement: placement;

  /** trigger to show the dropdown item  */
  trigger?: 'hover' | 'click';

  /** content to show in the dropdown */
  overlay?: React.ReactNode;

  /** if true, the arrow on the tooltip will be removed */
  hideArrow?: boolean;
}

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  className,
  hideArrow,
  placement,
  overlay,
}) => {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  const handleMouseEnter = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Container
      ref={triggerRef}
      className={`${className} rtk-tooltip`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Floater
        anchorElement={triggerRef.current}
        position={placements[placement]}
        open={open && triggerRef !== null}
      >
        <TooltipContainer placement={placement} hideArrow={hideArrow}>
          {overlay}
        </TooltipContainer>
      </Floater>
    </Container>
  );
};

Tooltip.displayName = 'Tooltip';

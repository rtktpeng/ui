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

  /** trigger to show the dropdown item. (click to come later) */
  trigger?: 'hover';

  /** content to show in the dropdown */
  overlay?: React.ReactNode;

  /** if true, the arrow on the tooltip will be removed */
  hideArrow?: boolean;

  /** if true, the tooltip will be rendered but not visible. Mostly used for testing */
  visible?: boolean;
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
  visible,
}) => {
  const [, forceRerender] = React.useState();
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  const handleMouseEnter = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setOpen(false);
  }, []);

  const isOpen = visible == null ? open && triggerRef !== null : visible;

  // If the initial visibility is set, force a rerender to cause the
  // ref anchorElement ref to be refetched by the floater
  React.useEffect(() => {
    if (visible !== undefined) {
      setTimeout(() => {
        forceRerender({});
      }, 0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        open={isOpen}
      >
        <TooltipContainer placement={placement} hideArrow={hideArrow}>
          {overlay}
        </TooltipContainer>
      </Floater>
    </Container>
  );
};

Tooltip.displayName = 'Tooltip';

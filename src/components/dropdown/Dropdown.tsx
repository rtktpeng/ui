import * as React from 'react';

import styled from 'styled-components';

import { Floater } from '../floater/Floater';

export interface DropdownProps {
  /** className of the dropdown component */
  className?: string;

  /** trigger to show the dropdown item  */
  trigger?: 'hover' | 'click';

  /** content to show in the dropdown */
  overlay?: React.ReactNode;
}

const Container = styled.span`
  cursor: pointer;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

const OverlayContainer = styled.div`
  background: white;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 6px;

  min-width: 200px;
`;

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
  overlay,
  trigger,
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
      className={`${className} rtk-dropdown `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Floater
        anchorElement={fooRef.current}
        position={['bl', 'tl']}
        open={open && fooRef !== null}
      >
        <div>asdfasdf</div>
        <OverlayContainer>{overlay}</OverlayContainer>
      </Floater>
    </Container>
  );
};

Dropdown.defaultProps = {
  trigger: 'hover',
};

Dropdown.displayName = 'Dropdown';

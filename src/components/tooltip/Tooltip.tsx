import * as React from 'react';

import styled from 'styled-components';

export interface TooltipProps {
  /** className of the tooltip component */
  className?: string;
}

const Container = styled.div`
  background: white;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  className,
}) => {
  return (
    <Container className={`${className} rtk-tooltip `}>{children}</Container>
  );
};

Tooltip.displayName = 'Tooltip';

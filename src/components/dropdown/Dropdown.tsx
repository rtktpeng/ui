import * as React from 'react';

import styled from 'styled-components';

export interface DropdownProps {
  /** className of the dropdown component */
  className?: string;
}

const Container = styled.div``;

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  children,
  className,
}) => {
  return (
    <Container className={`${className} rtk-dropdown `}>{children}</Container>
  );
};

Dropdown.displayName = 'Dropdown';

import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  Collapse
} from '../Collapse';

// @ts-ignore
import mdx from './Collapse.mdx';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const StyledCollapseContent = styled.div`
  height: 200px;
`;

const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

export const simple = () => (
  <Container>
    <Collapse
      header="Click Me"
      itemKey="default"
    >
      <CollapseContent>Im Onboarding!</CollapseContent>
    </Collapse>
  </Container>
);

export const open = () => (
  <Container>
    <Collapse
      header="Click Me"
      defaultActive
      itemKey="default"
    >
      <CollapseContent>Im Onboarding!</CollapseContent>
    </Collapse>
  </Container>
);
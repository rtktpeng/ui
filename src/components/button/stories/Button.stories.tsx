import * as React from "react";
import styled from 'styled-components';

import {
  Button,
  SizeType
} from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

import {
  getRegion
} from "../../../utils";

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TestContainer = styled.div`
  height: 800px
`;

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position:sticky;
  top: 0;
`;

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const types = () => (
  <Container>
    <Button type="primary">Primary</Button>
    <Spacer />
    <Button type="danger">Danger</Button>
    <Spacer />
    <Button type="link">Link</Button>
  </Container>
);

export const ghost = () => (
  <Container>
    <Button type="primary" ghost>Primary</Button>
    <Spacer />
    <Button type="danger" ghost>Danger</Button>
    <Spacer />
    <Button type="link" ghost>Link</Button>
  </Container>
);

export const disabled = () => (
  <Container>
    <Button type="primary" disabled>Primary</Button>
    <Spacer />
    <Button type="primary" ghost disabled>Ghost</Button>
    <Spacer />
    <Button type="danger" disabled>Danger</Button>
    <Spacer />
    <Button type="danger" ghost disabled>Ghost</Button>
    <Spacer />
    <Button type="link" disabled>Link</Button>
  </Container>
);

export const loading = () => {
  const [loading, toggleLoading] = React.useState(false);

  const handleToggle = React.useCallback(() => {
    toggleLoading(!loading);
  }, [loading, toggleLoading]);

  return (
    <React.Fragment>
      <div style={{marginBottom: '15px' }}>
        <Button onClick={handleToggle}>{loading ? 'Cancel Loading' : 'Start Loading'}</Button>
      </div>
      <Container>
        <Button
          type="primary"
          onClick={handleToggle}
          loading={loading}
        >
          Primary
        </Button>
        <Spacer />
        <Button
          type="primary"
          onClick={handleToggle}
          loading={loading}
          ghost
        >
          Ghost
        </Button>
        <Spacer />
        <Button
          type="danger"
          onClick={handleToggle}
          loading={loading}
        >
          Danger
        </Button>
        <Spacer />
        <Button
          type="danger"
          onClick={handleToggle}
          loading={loading}
          ghost
        >
          Danger
        </Button>
        <Spacer />
        <Button
          type="link"
          onClick={handleToggle}
          loading={loading}
        >
          Link
        </Button>
      </Container>
    </React.Fragment>
  );
};

export const shape = () => (
  <Container>
    <Button shape="circle" type="primary">P</Button>
    <Spacer />
    <Button shape="circle" type="danger">D</Button>
    <Spacer />
    <Button shape="circle" type="primary" ghost>G</Button>
    <Spacer />
    <Button shape="circle" loading type="primary">P</Button>
  </Container>
);

export const size = () => {
  const [size, setSize] = React.useState<SizeType>('default');
  return (
    <React.Fragment>
      <Container>
        <Button onClick={() => setSize('small')}>
          Small
        </Button>
        <Spacer />
        <Button onClick={() => setSize('default')}>
          Default
        </Button>
        <Spacer />
        <Button onClick={() => setSize('large')}>
          Large
        </Button>
      </Container>
      <Container>
        <Button size={size} type="primary">Primary</Button>
        <Spacer />
        <Button size={size}  shape="circle" ghost>G</Button>
      </Container>
    </React.Fragment>
  );
};


export const test = () => {
  const foo = React.useRef<HTMLDivElement>(null);
  const bar = React.useRef<HTMLDivElement>(null);
  const container = React.useRef<HTMLDivElement>(null);

  const handleFooClick = React.useCallback(() => {
    if (foo.current && container.current) {
      const thing = getRegion(foo.current, container.current);
      container.current.scrollTo({...thing, behavior: 'smooth', top: thing.top - 200});
    }
  }, [foo]);

  const handleBarClick = React.useCallback(() => {
    if (bar.current && container.current) {
      const thing = getRegion(bar.current, container.current);
      container.current.scrollTo({...thing, behavior: 'smooth', top: thing.top - 200});
    }
  }, [bar]);

  return (
    <div ref={container} style={{ maxHeight: '500px', overflow: 'scroll'}}>
      <Header>
        <Button onClick={handleFooClick}>Foo</Button>
        <Button onClick={handleBarClick}>Bar</Button>
      </Header>
      <TestContainer ref={foo} >
        foo
      </TestContainer>
      <TestContainer ref={bar} >
        bar
      </TestContainer>
    </div>
  );
};


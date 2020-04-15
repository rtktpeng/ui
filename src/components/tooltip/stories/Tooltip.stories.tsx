/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Tooltip } from '../Tooltip';
import { placement } from '../placements';

import { Button } from '../../button/Button';

// @ts-ignore
import mdx from './Tooltip.mdx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const positions: placement[] = [
  'topLeft',
  'top',
  'topRight',
  'rightTop',
  'right',
  'rightBottom',
  'bottomRight',
  'bottom',
  'bottomLeft',
  'leftBottom',
  'left',
  'leftTop',
];

const Overlay = styled.div`
  height: 100px;
  width: 100px;
`;

const Current = styled.div`
  margin-top: 16px;
`;

export const simple = () => {
  const [index, setPositionIndex] = React.useState(0);

  const handleClick = React.useCallback(() => {
    if (index === positions.length - 1) {
      setPositionIndex(0);
    } else {
      setPositionIndex(index + 1);
    }
  }, [index]);

  const position = positions[index];
  return (
    <>
      <Tooltip placement={position} overlay={<Overlay />} visible={false}>
        <Button onClick={handleClick} ghost>
          Click to Change Position
        </Button>
      </Tooltip>
      <Current>Current Position: {positions[index]}</Current>
    </>
  );
};
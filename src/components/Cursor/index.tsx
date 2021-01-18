import React from 'react';
import { useMouseMove } from '~/hooks/useMouseMove';
import * as Styled from './styles';

const Cursor = () => {
  const { x, y } = useMouseMove();

  return (
    <>
      <Styled.Cursor style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
};

export default Cursor;

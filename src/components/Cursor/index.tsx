import React, { useRef } from 'react';
import { useGlobalStateContext } from '~/context/context';
import { useMouseMove } from '~/hooks/useMouseMove';
import * as Styled from './styles';

const Cursor = () => {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef<HTMLDivElement>(null);
  useMouseMove(cursor);
  return (
    <>
      <Styled.Cursor className={`${cursorType}`} ref={cursor} />
    </>
  );
};

export default Cursor;

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
      <Styled.Cursor className={`${cursorType}`} ref={cursor}>
        <Styled.Text style={{ opacity: cursorType === 'locked' ? 1 : 0 }}>
          Projects
        </Styled.Text>
      </Styled.Cursor>
    </>
  );
};

export default Cursor;

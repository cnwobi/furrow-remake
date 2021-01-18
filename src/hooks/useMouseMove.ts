import React, { useEffect } from 'react';

type UseMouseMove = (cursor: React.MutableRefObject<HTMLDivElement>) => void;
type OnMouseMove = (event: MouseEvent) => void;

export const useMouseMove: UseMouseMove = cursor => {
  const onMouseMove: OnMouseMove = event => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
};

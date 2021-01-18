import React, { useEffect } from 'react';

export const useMouseMove = (
  cursor: React.MutableRefObject<HTMLDivElement>
) => {
  const onMouseMove = (event: MouseEvent) => {
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

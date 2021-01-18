import { useEffect, useState } from 'react';

type CursorState = {
  x: number;
  y: number;
};

export const useMouseMove = () => {
  const initial: CursorState = {
    x: 500,
    y: 500,
  };
  const [{ x, y }, setMousePosition] = useState(initial);

  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return { x, y };
};

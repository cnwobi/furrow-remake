import React, { useEffect, useState } from 'react';

const useElementPosition = (el: React.MutableRefObject<HTMLDivElement>) => {
  const [elementPosition, setElementPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const element = el.current;
    const x =
      element.getBoundingClientRect().left +
      document.documentElement.scrollLeft +
      element.offsetWidth / 2;
    const y =
      element.getBoundingClientRect().top +
      document.documentElement.scrollTop +
      element.offsetHeight / 2 +
      72;
    setElementPosition({
      x,
      y,
    });
  }, [el]);

  return elementPosition;
};

export default useElementPosition;

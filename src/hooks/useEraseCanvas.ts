import React, { useEffect } from 'react';
import { Theme } from '~/context/context';

type WindowSize = {
  width: number;
  height: number;
};
type UseEraseCanvas = (
  canvas: React.MutableRefObject<HTMLCanvasElement>,
  size: WindowSize,
  currentTheme: Theme
) => void;

export const useEraseCanvas: UseEraseCanvas = (
  canvas,
  { width, height },
  currentTheme
) => {
  useEffect(() => {
    const renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    const drawingElement = <HTMLCanvasElement>renderingElement.cloneNode();
    const drawingCtx = drawingElement.getContext('2d');
    const renderingCtx = renderingElement.getContext('2d');
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = 'source-over';
    renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
    renderingCtx.fillRect(0, 0, width, height);

    const onMouseOver = (ev: MouseEvent) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    const onMouseUp = (ev: MouseEvent) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    const onMouseMove = (ev: MouseEvent) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';

        const currentX = ev.pageX - renderingElement.offsetLeft;
        const currentY = ev.pageY - renderingElement.offsetTop;

        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();

        lastX = currentX;
        lastY = currentY;

        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    };

    renderingElement.addEventListener('mouseover', onMouseOver);
    renderingElement.addEventListener('click', onMouseOver);
    renderingElement.addEventListener('mouseup', onMouseUp);
    renderingElement.addEventListener('mousemove', onMouseMove);

    return () => {
      renderingElement.removeEventListener('mousemove', onMouseMove);
      renderingElement.removeEventListener('click', onMouseOver);
      renderingElement.removeEventListener('mouseover', onMouseOver);
    };
  }, [currentTheme]);
};

import React, { useRef } from 'react';
import { OnCursor } from '~/components/layout';
import { useGlobalStateContext } from '~/context/context';
import { useEraseCanvas } from '~/hooks/useEraseCanvas';
import { useWindowSize } from '~/hooks/useWindowSize';
import * as Styled from './styles';

interface Props {
  onCursor: OnCursor;
}

const Banner = ({ onCursor }: Props) => {
  const canvas = useRef(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();
  useEraseCanvas(canvas, size, currentTheme);

  return (
    <Styled.Banner>
      <Styled.Video
        loop={true}
        autoPlay={true}
        src={require('~/assets/video/video.mp4')}
      />
      <Styled.Canvas
        ref={canvas}
        height={size.height}
        width={size.width}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor(undefined)}
      />
      <Styled.Title>
        <Styled.Headline>DIG</Styled.Headline>
        <Styled.Headline>DEEP</Styled.Headline>
      </Styled.Title>
    </Styled.Banner>
  );
};

export default Banner;

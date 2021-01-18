import React from 'react';
import * as Styled from './styles';
const Banner = () => (
  <Styled.Banner>
    <Styled.Video
      loop={true}
      autoPlay={true}
      src={require('~/assets/video/video.mp4')}
    />
    <Styled.Canvas />
    <Styled.Title>
      <Styled.Headline>DIG</Styled.Headline>
      <Styled.Headline>DEEP</Styled.Headline>
    </Styled.Title>
  </Styled.Banner>
);

export default Banner;

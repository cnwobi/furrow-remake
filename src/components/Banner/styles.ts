import styled from 'styled-components';

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 200px;
`;

export const Title = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.background};
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`;

export const Headline = styled.span`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`;

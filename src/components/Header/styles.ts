import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderWrapper = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${props => props.theme.red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`;

export const Menu = styled.div`
  button {
    border: none;
    background: none;
    padding: 20px;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`;
type HeaderWrapperMotionProps = {
  animate: any;
  initial: any;
  transition: any;
};
const animate = { y: 0, opacity: 1 };
const initial = { y: -72, opacity: 0 };
const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] };

export const headerMotionProps: HeaderWrapperMotionProps = {
  animate,
  initial,
  transition,
};

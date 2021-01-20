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

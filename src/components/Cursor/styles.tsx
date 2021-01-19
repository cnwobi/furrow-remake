import styled from 'styled-components';

export const Cursor = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.red} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
    span {
      position: relative;
      left: -250%;
    }
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`;

export const Text = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.theme.text};
`;

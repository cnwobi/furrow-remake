import { Link } from 'gatsby';
import React, { useRef } from 'react';
import HamburgerMenu from '~/components/Header/HamburgerMenu';
import { OnCursor } from '~/components/layout';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '~/context/context';
import useElementPosition from '~/hooks/useElementPosition';
import { usePersistTheme } from '~/hooks/usePersistTheme';
import * as Styled from './styles';
import * as GlobalStyled from '~/components/GlobalStyles';

interface Props {
  onCursor: OnCursor;
  position?: Position;
  ref?: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void);
  setHamburgerPosition?: React.Dispatch<React.SetStateAction<Position>>;
}

export interface Position {
  x: number;
  y: number;
}

const Logo = ({ onCursor, toggleTheme }) => (
  <Styled.Logo
    onMouseEnter={() => onCursor('hovered')}
    onMouseLeave={() => onCursor(undefined)}
  >
    <Link to="/">FURR</Link>
    <span
      onClick={toggleTheme}
      onMouseEnter={() => onCursor('pointer')}
      onMouseLeave={() => onCursor(undefined)}
    />
    <Link to="/">W</Link>
  </Styled.Logo>
);

const Header = ({ onCursor, setHamburgerPosition }: Props) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  usePersistTheme(currentTheme);
  const hamburger = useRef(null);
  const { x, y } = useElementPosition(hamburger);

  const toggleTheme = () =>
    currentTheme === 'dark'
      ? dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      : dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });

  const { animate, initial, transition } = Styled.headerMotionProps;

  const handleMouseEnter = () => {
    onCursor('locked');
    setHamburgerPosition({ x, y });
  };

  return (
    <Styled.HeaderWrapper
      animate={animate}
      initial={initial}
      transition={transition}
    >
      <GlobalStyled.Container>
        <GlobalStyled.Flex spaceBetween={true} noHeight={true}>
          <Logo onCursor={onCursor} toggleTheme={toggleTheme} />
          <HamburgerMenu
            onMouseEnter={handleMouseEnter}
            hamburger={hamburger}
          />
        </GlobalStyled.Flex>
      </GlobalStyled.Container>
    </Styled.HeaderWrapper>
  );
};

export default Header;

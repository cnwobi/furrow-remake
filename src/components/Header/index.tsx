import { Link } from 'gatsby';
import React from 'react';
import { OnCursor } from '~/components/layout';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '~/context/context';
import { usePersistTheme } from '~/hooks/usePersistTheme';
import * as Styled from './styles';
import * as GlobalStyled from '~/components/GlobalStyles';

interface Props {
  onCursor: OnCursor;
}

const HamburgerMenu = () => (
  <Styled.Menu>
    <button>
      <span />
      <span />
    </button>
  </Styled.Menu>
);

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

const Header = ({ onCursor }: Props) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  usePersistTheme(currentTheme);

  const toggleTheme = () =>
    currentTheme === 'dark'
      ? dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
      : dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });

  const { animate, initial, transition } = Styled.headerMotionProps;

  return (
    <Styled.HeaderWrapper
      animate={animate}
      initial={initial}
      transition={transition}
    >
      <GlobalStyled.Container>
        <GlobalStyled.Flex spaceBetween={true} noHeight={true}>
          <Logo onCursor={onCursor} toggleTheme={toggleTheme} />
          <HamburgerMenu />
        </GlobalStyled.Flex>
      </GlobalStyled.Container>
    </Styled.HeaderWrapper>
  );
};

export default Header;

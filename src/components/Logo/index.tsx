import { Link } from 'gatsby';
import React from 'react';
import * as Styled from '~/components/Logo/styles';

const Logo = ({ onCursor, toggleTheme }) => (
  <Styled.Logo
    onMouseEnter={() => onCursor('hovered')}
    onMouseLeave={() => onCursor(undefined)}
  >
    <Link to="/">FURR</Link>
    <Styled.LetterO
      onClick={toggleTheme}
      onMouseEnter={() => onCursor('pointer')}
      onMouseLeave={() => onCursor(undefined)}
    />
    <Link to="/">W</Link>
  </Styled.Logo>
);

export default Logo;

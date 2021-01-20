import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import * as React from 'react';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import { normalize } from 'styled-normalize';
import Cursor from '~/components/Cursor';
import Header, { Position } from '~/components/Header';
import { CursorType, useGlobalStateContext } from '~/context/context';

export type OnCursor = (cursorType: CursorType) => any;
type Props = {
  children?: React.ReactNode;
  onCursor?: OnCursor;
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;


  }

  body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;

  }
`;

const Layout = ({ children, onCursor }: Props) => {
  // @ts-ignore
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const initialPosition: Position = {
    x: 0,
    y: 0,
  };

  const [{ x, y }, setHamburgerPosition] = useState(initialPosition);

  const darkTheme: DefaultTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
    top: `${y}px`,
    left: `${x}px`,
  };

  const lightTheme: DefaultTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
    top: `${y}px`,
    left: `${x}px`,
  };
  const { currentTheme } = useGlobalStateContext();
  const getThemeObject = currentTheme =>
    currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={getThemeObject(currentTheme)}>
      <GlobalStyle />
      <Cursor />
      <Header onCursor={onCursor} setHamburgerPosition={setHamburgerPosition} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;

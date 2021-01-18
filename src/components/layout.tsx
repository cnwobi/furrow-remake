import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import Cursor from '~/components/Cursor';
import Header from '~/components/Header';
import {
  CursorType,
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '~/context/context';

type Props = {
  children?: React.ReactNode;
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
type Theme = {
  background: string;
  text: string;
  red: string;
};

export type OnCursor = (cursorType: CursorType) => any;

const Layout = ({ children }: Props) => {
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
  const darkTheme: Theme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
  };

  const lightTheme: Theme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
  };
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const getThemeObject = currentTheme =>
    currentTheme === 'light' ? lightTheme : darkTheme;

  const onCursor: OnCursor = (cursorType?: CursorType) =>
    dispatch({ type: 'CURSOR_TYPE', cursorType });

  return (
    <ThemeProvider theme={getThemeObject(currentTheme)}>
      <GlobalStyle />
      <Cursor />
      <Header onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;

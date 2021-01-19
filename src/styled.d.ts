import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    red: string;
    top?: string;
    left?: string;
  }
}

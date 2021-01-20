import React, { createContext, useContext, useReducer } from 'react';

export type Theme = 'light' | 'dark';
export type CursorType = 'pointer' | 'hovered' | 'locked' | undefined;

type State = {
  currentTheme: Theme;
  cursorType: CursorType;
};

type ActionType = 'TOGGLE_THEME' | 'CURSOR_TYPE';
type Action = {
  type: ActionType;
  theme?: Theme;
  cursorType?: CursorType;
};

const GlobalStateContext = createContext<State>(undefined);
const GlobalDispatchContext = createContext<React.Dispatch<Action>>(undefined);

type GlobalReducer = (state: State, action: Action) => State;

const globalReducer: GlobalReducer = (state, { type, theme, cursorType }) => {
  switch (type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: theme,
      };
    }
    case 'CURSOR_TYPE':
      return {
        ...state,
        cursorType: cursorType,
      };
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const getStoredThemeOrDefault = () =>
  window.localStorage.getItem('theme')
    ? window.localStorage.getItem('theme')
    : 'dark';

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: getStoredThemeOrDefault() as Theme,
    cursorType: undefined,
  });
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state as State}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

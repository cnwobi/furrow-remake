import React, { createContext, useContext, useReducer } from 'react';

type Theme = 'light' | 'dark';
type State = {
  currentTheme: Theme;
};

type ActionType = 'TOGGLE_THEME';
type Action = {
  type: ActionType;
  theme: Theme;
};

const GlobalStateContext = createContext(undefined);
const GlobalDispatchContext = createContext(undefined);

type GlobalReducer = (state: State, action: Action) => State;

const globalReducer: GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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

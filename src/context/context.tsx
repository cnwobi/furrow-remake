import React, { createContext, useContext, useReducer } from 'react';

type CurrentTheme = 'light' | 'dark';
type State = {
  currentTheme: CurrentTheme;
};

type ActionType = 'TOGGLE_THEME';
type Action = {
  type: ActionType;
  theme: string;
};

const GlobalStateContext = createContext(undefined);
const GlobalDispatchContext = createContext(undefined);

const globalReducer = (state: State, action: Action) => {
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
    currentTheme: getStoredThemeOrDefault(),
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

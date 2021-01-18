import { useEffect } from 'react';

export const useSetLocalStorageTheme = currentTheme => {
  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);
};

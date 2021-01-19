import { useEffect } from 'react';

export const usePersistTheme = currentTheme => {
  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);
};

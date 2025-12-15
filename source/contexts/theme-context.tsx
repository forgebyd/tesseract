import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const initialThemeState: ThemeState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeState>(initialThemeState);

function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'tesseract_theme',
  ...props
}: ThemeProviderProps): React.ReactNode {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }

    return defaultTheme;
  });

  useEffect(() => {
    const rootDocumentElement = window.document.documentElement;

    rootDocumentElement.classList.remove('dark', 'light', 'system');

    if (theme === 'system') {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      rootDocumentElement.classList.add(preferredTheme);
      return;
    }

    rootDocumentElement.classList.add(theme);
  }, [theme]);

  const themeState = {
    theme,
    setTheme: (theme: Theme): void => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      }
    },
  };

  return (
    <ThemeContext.Provider {...props} value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, type Theme, type ThemeState };

import { useContext } from 'react';

import { ThemeContext, ThemeState } from '~/contexts/theme-context.tsx';

function useTheme(): ThemeState {
  return useContext(ThemeContext);
}

export { useTheme };

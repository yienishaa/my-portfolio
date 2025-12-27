import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

export const brandedTokens: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: 'rgb(229, 229, 234)',
    },
    // mode will be injected by createAppTheme
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
  },
};

export const brandedComponents: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'unset',
        textTransform: 'capitalize',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
};

// Factory that creates a theme for a given mode ('light' | 'dark')
export function createAppTheme(mode: 'light' | 'dark' = 'light') {
  const paletteOverrides: ThemeOptions['palette'] = {
    mode,
    background: {
      default: mode === 'dark' ? '#121212' : '#ffffff',
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#000',
    },
  };

  const theme = createTheme({
    ...brandedTokens,
    palette: {
      ...brandedTokens.palette,
      ...paletteOverrides,
    },
    components: {
      ...brandedComponents,
    },
  });

  return theme;
}

// default export: light theme for convenience in tests and simple wrappers
const defaultTheme = createAppTheme('light');
export default defaultTheme;

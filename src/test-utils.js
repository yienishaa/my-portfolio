import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './CustomTheme';

const AllProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };

export * from '@testing-library/react';

export default { render: customRender };


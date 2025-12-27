import React, { StrictMode, useMemo, useState, createContext } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createAppTheme } from './CustomTheme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Root() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StrictMode>
  );
}

root.render(<Root />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

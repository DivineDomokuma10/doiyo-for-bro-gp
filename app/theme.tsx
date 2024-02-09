'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement, ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#19B536',
      contrastText: '#fff'
    },
    secondary: {
      main: '#000759'
    }
  }
});

function Theme({ children }: { children: ReactNode }): ReactElement {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

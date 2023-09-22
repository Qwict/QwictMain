import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/main/Main'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerProvider } from './context/DrawerProvider';
import QwerticRegular from './fonts/QwictRegular.ttf';
import Footer from './components/footer/Footer';
import { DialogProvider } from './context/DialogProvider';
import { SnackbarProvider } from './context/SnackbarProvider';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ff0000'
    }
  
  },
  // typography: {
  //   fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  //   // Other typography settings...
  // },
  typography: {
    fontFamily: 'QwictRegular',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "QwictRegular";
          src: local("QwictRegular"),
            url(${QwerticRegular}) format("truetype");
        }
      `,
    },
  },
});
function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DialogProvider>
          <SnackbarProvider>
            <DrawerProvider>
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
              <Footer />
            </DrawerProvider>
          </SnackbarProvider>
        </DialogProvider>
      </ThemeProvider>
  );
}

export default App;

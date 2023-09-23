import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/main/Main'
import SetBackground from './SetBackground';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerProvider } from './context/DrawerProvider';


import QwerticRegular from './fonts/QwictRegular.ttf';
import "@fontsource/ubuntu";

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
  typography: {
    h1: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    h2: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    h3: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    h4: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    h5: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    h6: {
      fontFamily: 'QwictRegular',
      color: 'grey'
    },
    fontFamily: 'Ubuntu',
    button: {
      fontFamily: "Comic Sans MS"
    }
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

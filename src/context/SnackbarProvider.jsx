import React, { createContext, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const SnackbarContext = createContext();

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleOpen = () => {
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ snackbarOpen, handleOpen }}>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
            This feature is not yet implemented.
          </Alert>
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
      </Stack>
      {children}
    </SnackbarContext.Provider>
  );
};


import React, { createContext, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import AboutQwictDialog from '../media/AboutQwictDialog';

// Create a context
const DialogContext = createContext();

// Create a custom hook to access the context
export const useDialog = () => {
  return useContext(DialogContext);
};

// Create a context provider
export const DialogProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  }

  return (
    <DialogContext.Provider value={{ dialogOpen, toggleDialog }}>
      <div>
        <Dialog
          maxWidth="md"
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={toggleDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            Welcome to Qwict - Your Premier Web Development and Hosting Solutions Partner!
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={toggleDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText>
              <AboutQwictDialog />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      {children}
    </DialogContext.Provider>
  );
};


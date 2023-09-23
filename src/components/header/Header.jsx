import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import './Header.css'; // Import your CSS file
import { useDrawer } from '../../context/DrawerProvider';
import { useDialog } from '../../context/DialogProvider';
import { useSnackbar } from '../../context/SnackbarProvider';

const Header = () => {
  const { drawerOpen, toggleDrawer } = useDrawer();
  const { dialogOpen, toggleDialog } = useDialog();
  const { snackbarOpen, handleOpen } = useSnackbar();
  const [currentlySelected, setCurrentlySelected] = React.useState(null);

  const handleSelect = (e, forwardedFunction) => {
    resetSelected()
    setCurrentlySelected(e.target);
    e.target.style.color = 'red'
    forwardedFunction();
  };

  function resetSelected() {
    if (currentlySelected) {
      currentlySelected.style.color = 'grey';
    }
  }

  const goToBottom = () => {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!drawerOpen || !snackbarOpen || !dialogOpen) {
      resetSelected();
    }

  }, [drawerOpen, snackbarOpen, dialogOpen]);


  return (
    <div className="header-links">
      <Typography
        variant="h2"
        className="header-link"
        onMouseEnter={(e) => (e.target.style.color = 'red') && resetSelected()}
        onMouseLeave={(e) => (e.target == currentlySelected ? e.target.style.color = 'red' : e.target.style.color = 'grey')}
        onClick={(e) => handleSelect(e, toggleDrawer)}
      >
        Projects
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        onMouseEnter={(e) => (e.target.style.color = 'red') && resetSelected()}
        onMouseLeave={(e) => (e.target == currentlySelected ? e.target.style.color = 'red' : e.target.style.color = 'grey')}
        onClick={(e) => handleSelect(e, toggleDialog)}
      >
        About
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        onMouseEnter={(e) => (e.target.style.color = 'red') && resetSelected()}
        onMouseLeave={(e) => (e.target == currentlySelected ? e.target.style.color = 'red' : e.target.style.color = 'grey')}
        onClick={(e) => handleSelect(e, handleOpen)}
      >
        Blog
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        onMouseEnter={(e) => (e.target.style.color = 'red') && resetSelected()}
        onMouseLeave={(e) => (e.target == currentlySelected ? e.target.style.color = 'red' : e.target.style.color = 'grey')}
        onClick={(e) => handleSelect(e, goToBottom)}
      >
        Contact
      </Typography>
    </div>
  );
};

export default Header;

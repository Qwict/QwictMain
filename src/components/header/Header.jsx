import React from 'react';
import Typography from '@mui/material/Typography';
import './Header.css'; // Import your CSS file
import { useDrawer } from '../../context/DrawerProvider';
import { useDialog } from '../../context/DialogProvider';
import { useSnackbar } from '../../context/SnackbarProvider';

const Header = () => {
  const { toggleDrawer } = useDrawer();
  const { toggleDialog } = useDialog();
  const { handleOpen } = useSnackbar();
  
  const goToBottom = () => {
    window.scrollTo({
        top: 10000,
        behavior: 'smooth',
    });
  };

  return (
    <div className="header-links">
      <Typography
        variant="h2"
        className="header-link"
        style={{ color: 'grey' }}
        onMouseEnter={(e) => (e.target.style.color = 'red')}
        onMouseLeave={(e) => (e.target.style.color = 'grey')}
        onClick={toggleDrawer} 
      >
        Projects
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        style={{ color: 'grey' }}
        onMouseEnter={(e) => (e.target.style.color = 'red')}
        onMouseLeave={(e) => (e.target.style.color = 'grey')}
        onClick={toggleDialog}
      >
        About
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        style={{ color: 'grey' }}
        onMouseEnter={(e) => (e.target.style.color = 'red')}
        onMouseLeave={(e) => (e.target.style.color = 'grey')}
        onClick={handleOpen}
      >
        Blog
      </Typography>
      <Typography
        variant="h2"
        className="header-link"
        style={{ color: 'grey' }}
        onMouseEnter={(e) => (e.target.style.color = 'red')}
        onMouseLeave={(e) => (e.target.style.color = 'grey')}
        onClick={goToBottom}
      >
        Contact
      </Typography>
      {/* Add more links as needed */}
    </div>
  );
};

export default Header;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Header.css'; // Import your CSS file
import { useDrawer } from '../../context/DrawerProvider'; // Import the context hook


const Header = () => {
  const { drawerOpen, toggleDrawer } = useDrawer();
  
  return (
    <div className="center-div">
        <div className="header-links">
          <Typography
            variant="h2"
            className="header-link"
            style={{ color: 'grey' }} // Initial color
            onMouseEnter={(e) => (e.target.style.color = 'red')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.color = 'grey')} // Restore initial color on hover out
            onClick={toggleDrawer} 
          >
            Projects
          </Typography>
          <Typography
            variant="h2"
            className="header-link"
            style={{ color: 'grey' }} // Initial color
            onMouseEnter={(e) => (e.target.style.color = 'red')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.color = 'grey')} // Restore initial color on hover out
          >
            About
          </Typography>
          <Typography
            variant="h2"
            className="header-link"
            style={{ color: 'grey' }} // Initial color
            onMouseEnter={(e) => (e.target.style.color = 'red')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.color = 'grey')} // Restore initial color on hover out
          >
            Blog
          </Typography>
          <Typography
            variant="h2"
            className="header-link"
            style={{ color: 'grey' }} // Initial color
            onMouseEnter={(e) => (e.target.style.color = 'red')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.color = 'grey')} // Restore initial color on hover out
          >
            Contact
          </Typography>
          {/* Add more links as needed */}
        </div>

        </div>
  );
};

export default Header;

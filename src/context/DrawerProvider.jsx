import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import useProject from '../api/Project';


import ProjectCard from '../components/project/ProjectCard';
import { Typography } from '@mui/material';

// Create a context
const DrawerContext = createContext();

// Create a custom hook to access the context
export const useDrawer = () => {
  return useContext(DrawerContext);
};

// Create a context provider
export const DrawerProvider = ({ children }) => {
  const { getAllProjects } = useProject();
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  // const [error, setError] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const refreshProjects = useCallback(async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (err) {
      // setError(err);
    } finally {
      setLoadingProjects(false);
    }
  }, [getAllProjects]);

  useEffect(() => {
    refreshProjects();
  }, [refreshProjects]);

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      <div>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <div>
            {loadingProjects && <LinearProgress color="secondary" />}

            <Typography variant="h4" component="div" sx={{ mt: 2, ml: 2 }}>
              Projects
            </Typography>
            <IconButton
              aria-label="close"
              onClick={toggleDrawer}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div
            role="presentation"
            // onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} project={project} />
              ))}
            </List>
          </div>
        </Drawer>
      </div>
      {children}
    </DrawerContext.Provider>
  );
};


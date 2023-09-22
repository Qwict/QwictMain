import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import LinearProgress from '@mui/material/LinearProgress';

import useProject from '../api/Project';


import ProjectCard from '../components/project/ProjectCard';

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
  const [error, setError] = useState(null);

  const refreshProjects = useCallback(async () => {
    try {
        setLoadingProjects(true);
        const data = await getAllProjects();
        setProjects(data);
    } catch (err) {
        setError(err);
    } finally {
        // setLoadingProjects(false);
    }
  }, [getAllProjects]);


  
  useEffect(() => {
    refreshProjects();
  }, [refreshProjects]);


  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      <div>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <div>
          {loadingProjects && <LinearProgress color="secondary" />}

          </div>

          <div
            role="presentation"
            // onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} project={project}/>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
      {children}
    </DrawerContext.Provider>
  );
};


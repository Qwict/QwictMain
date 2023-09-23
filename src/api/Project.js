// import axios from 'axios';
import {
  useCallback,
  useMemo,
} from 'react';
import projects from '../media/Projects';

// Fake api data to simulate a real api call


// const baseUrl = `${process.env.REACT_APP_API_URL}/project`;

const useProject = () => {

  const getAllProjects = useCallback(async () => {
      // const {
      //     data,
      // } = await axios.get(baseUrl);

      // fake a delay to simulate a real api call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return projects;
  }, []);


  const projectApi = useMemo(() => ({
      getAllProjects,
  }), [getAllProjects]);

  return projectApi;
}

export default useProject;
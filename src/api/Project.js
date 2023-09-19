import axios from 'axios';
import {
  useCallback,
  useMemo,
} from 'react';

// Fake api data to simulate a real api call
const projects = [
  {
    id: 1,
    name: 'IsBin',
    description: 'A simple library application written in Java with Springboot and Thymeleaf.',
    longDescription: '',  
    team: ['J.V.D'],
    link: 'https://isbin.qwict.com',
    github: 'https://github.com',
    image: 'https://via.placeholder.com/150',
    lastUpdated: '2023-09-10',
  },
  {
    id: 2,
    name: 'Todo App',
    description: 'Joris his first React app, a simple todo app that allows you to share todo-lists with other people.',
    longDescription: "My first React application is a versatile to-do application integrated with Auth0 for user authentication. Users can log in with their GitHub, Google, or email and password credentials. They can create to-do lists, share them with others, and effortlessly add and check off items. The application's frontend is built with React and features a sleek Material UI design, while the backend relies on Koa to create the API. Data is stored and managed in a MySQL database, and the application is seamlessly connected to Auth0 for secure user authentication.",
    team: ['J.V.D'],
    link: 'https://todo.qwitc.com',
    github: 'https://github.com',
    image: 'https://via.placeholder.com/150',
    lastUpdated: '2023-05-20',
  },
  {
    id: 3,
    name: 'DWS web-store',
    description: 'A more advanced React web application that allows companies to buy and sell products.',
    team: ['A.S.', 'L.D.M', 'J.V.D'],
    link: 'https://dws.qwict.com',
    github: 'https://github.com',
    image: 'https://via.placeholder.com/150',
    lastUpdated: '2023-05-01',
  },
  {
    id: 4,
    name: 'DWS IMA',
    description: 'An inventory management application written in Java. This applications supports the DWS web-store and plugs into the same database. This makes it a very storng suite of applications',
    longDescription: '',
    team: ['A.S.', 'L.D.M', 'J.V.D'],
    link: 'https://dws.qwict.com',
    github: 'https://github.com',
    image: 'https://via.placeholder.com/150',
    lastUpdated: '2023-05-01',
  }
];

// const baseUrl = `${process.env.REACT_APP_API_URL}/project`;

const useProject = () => {

  const getAllProjects = useCallback(async () => {
      // const {
      //     data,
      // } = await axios.get(baseUrl);

      // fake a delay to simulate a real api call
      // await new Promise(resolve => setTimeout(resolve, 10000));
      return projects;
  }, []);


  const projectApi = useMemo(() => ({
      getAllProjects,
  }), [getAllProjects]);

  return projectApi;
}

export default useProject;
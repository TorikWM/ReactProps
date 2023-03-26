import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createBrowserRouter,RouterProvider,}from "react-router-dom";
import Pictures from './pages/Pictures';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/home",
        element: <Home/>,
  },
  {
    path: "/",
        element: <Home/>,
  },
  {
    path: "/pictures",
    element: <Pictures />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)

//////////////////////////////////////////////////
//  Error page needs to be blank with error msg *
//  Pictures page should not show slider
//  Error Code re-check 
//  Find how to center items of Bootstrap with css 
//  Find how to link navbars to other pages
//  Find how to add img desktop to slide bar
/////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';

import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import Home from "./routes/home";
import Projects from "./routes/projects";
import About from "./routes/about";

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Anonymous Pro', 'Josefin Sans', 'Josefin Slab']
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

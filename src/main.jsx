import React from 'react'
import ReactDOM from 'react-dom/client'
import ListProduct from './ListProduct'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

const router = createBrowserRouter([

  {
    path: "/app",
    element: <App />,
  },

  {
    path: "/",
    element: <ListProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


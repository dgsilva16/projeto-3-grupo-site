import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App'
import './main.css'

import Catalogo from "./pages/Catalogo";
import Filme from "./pages/Filme";
import NovoFilme from "./pages/NovoFilme";
import EditarFilme from "./pages/EditarFilme";
import Resultadobusca from "./pages/Resultadobusca"
import Home from "./AppHome"
import Cinemas from "./AppCinemas"



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      
      {
        path: "/todos_os_filmes",
        element: <Catalogo />,
      },
      {
        path: "/todos_os_filmes/:id",
        element: <Filme />,
      },
      {
        path: "/adicionar_filme",
        element: <NovoFilme />,
      },
      {
        path: "/editar_filme/:id",
        element: <EditarFilme />,
      },
      {
        path: "/busca/:busca",
        element: <Resultadobusca />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cinemas",
        element: <Cinemas />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

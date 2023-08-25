import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/register.jsx'
import NotFoundPage from './pages/404.jsx'
import ProductPage from './pages/products'

const router = createBrowserRouter([
  {
    path : "/",
    element: <div>Hello World</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path : "/login",
    element: <LoginPage />
  },
  {
    path : "/register",
    element: <RegisterPage />
  },
  {
    path :"/products",
    element: <ProductPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

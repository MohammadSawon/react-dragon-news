
import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../Layout/Root'
import { Home } from '../Pages/Home'
import { Login } from '../Authentication/Login'
import { Register } from '../Authentication/Register'
import { Profile } from '../Pages/Profile'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

export const Router =  createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/profile',
          element: <PrivateRouter><Profile></Profile></PrivateRouter> 
        }
      ]
    }
  ])


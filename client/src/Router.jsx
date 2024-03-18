import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { Login, Main, Register } from './pages'

// create all routes and link them with correct Page components
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/main",
    element: <Main />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

// create router provider and pass it to import it in index.js
const Router = ({ children }) => {
  return (
    <RouterProvider router={ router }>
      { children }
    </RouterProvider>
  )
}


export default Router
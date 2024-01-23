import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import Home from './pages/home'
import Login from './pages/loginPage'
import Signup from './pages/signuppage'
import Cart from './pages/Cartpage'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom" ;

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/login",
    element:<Login></Login>,
  },
  {
    path: "/signup",
    element:<Signup></Signup>,
  },
  {
    path: "/cart",
    element:<Cart></Cart>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

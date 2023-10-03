import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Home/Home"
import About from "../pages/About";
import Carrer from "../pages/Carrer";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:"/carrer",
            element:<Carrer></Carrer>
        }
      ]
    },
  ]);

export default router;
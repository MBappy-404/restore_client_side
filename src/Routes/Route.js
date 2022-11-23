import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";

 

     const router = createBrowserRouter([
          {
               path: '/',
               element: <Main></Main>,
               // errorElement:,
               children: [
                    {
                         path: '/',
                         element: <Home></Home>
                    },
                    {
                         path: '/home',
                         element: <Home></Home>
                    },
                    {
                         path: '/blog',
                         element: <Blog></Blog>
                    },
               ]

          }

     ])
 

     export default router;
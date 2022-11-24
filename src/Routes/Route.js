import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Products from "../Pages/Home/Category/Products";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Signup&Signin/Login";
import Signup from "../Pages/Signup&Signin/Signup";

 

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
                    {
                         path: '/signup',
                         element: <Signup></Signup>
                    },
                    {
                         path: '/login',
                         element: <Login></Login>
                    },
                    {
                         path:'/category/:category_id',
                         element:<Products></Products>
                    }
               ]

          }

     ])
 

     export default router;
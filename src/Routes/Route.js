import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct";
import ReportedItems from "../Pages/Dashboard/ReportedItems";
import Products from "../Pages/Home/Category/Products";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Signup&Signin/Login";
import Signup from "../Pages/Signup&Signin/Signup";
import Dashboard from '../Pages/Dashboard/Dashboard'
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";

 

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
                         path:'/category/:name',
                         loader: ({params}) => fetch(`http://localhost:5000/category/${params.name}`),
                         element: <PrivateRoute><Products></Products></PrivateRoute>
                    }
               ]

          },

          {
               path: '/dashboard',
               element:  <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
               // errorElement: <ErrorPage></ErrorPage>,
               children: [
     
                    {
                         path: '/dashboard',
                         element: <Dashboard></Dashboard>
                    },
                    {
                         path: '/dashboard/myOrders',
                         element: <MyOrders></MyOrders>
                    },
                    {
                         path: '/dashboard/addProducts',
                         element: <AddProduct></AddProduct>
                    },
                    {
                         path: '/dashboard/allBuyers',
                         element: <AllBuyer></AllBuyer>
                    },
                    {
                         path: '/dashboard/allSellers',
                         element: <AllSeller></AllSeller>
                    },
                    {
                         path: '/dashboard/myProducts',
                         element: <MyProduct></MyProduct>
                    },
                    {
                         path: '/dashboard/reportedItems',
                         element: <ReportedItems></ReportedItems>
                    },
                    {
                         path: '/dashboard/payment/:id',
                         element: <PrivateRoute> <Payment></Payment> </PrivateRoute>,
                         loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
                    }
               ]
          }

     ])
 

     export default router;
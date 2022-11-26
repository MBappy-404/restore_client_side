import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Auth';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';


const DashboardLayout = () => {

     const { user } = useContext(AuthContext);
     const [isAdmin] = useAdmin(user?.email)

     return (
          <div>
               <Navbar></Navbar>
               <div className="drawer drawer-mobile ">
                    <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                         <Outlet></Outlet>

                    </div>
                    <div className="drawer-side ">
                         <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label>
                         <ul className="menu p-4  bg-teal-400 w-80 ">

                             {
                              isAdmin === "Buyer"  && 
                              <>
                               <li><Link className='font-semibold' to='/dashboard/myOrders'>My Orders</Link></li>
                              </>
                              
                             }


                             {
                              isAdmin === "Seller" && 

                              <>
                               <li><Link className='font-semibold' to="/dashboard/addProducts">Add A product</Link></li>
                              <li><Link className='font-semibold' to="/dashboard/myProducts">My product</Link></li>
                              </>
                             }

                              {
                                   isAdmin === "Admin" &&
                                   <>
                                        <li><Link className='font-semibold' to="/dashboard/allSellers">All Sellers</Link></li>
                                        <li><Link className='font-semibold' to="/dashboard/allBuyers">All Buyer</Link></li>
                                        <li><Link className='font-semibold' to="/dashboard/reportedItems">Reported Items</Link></li>
                                   </>
                              }


                         </ul>



                    </div>
               </div>
          </div>
     );
};

export default DashboardLayout;
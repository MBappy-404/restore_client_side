import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Auth';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';



const DashboardLayout = () => {

     const { user } = useContext(AuthContext);
     const [type] = useAdmin(user?.email)

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
                         <ul className="menu p-4 text-white bg-indigo-500 w-60 ">

                              {
                                   type === "Buyer" &&
                                   <>
                                        <li><Link className='font-semibold text-center glass mt-5' to='/dashboard/myOrders'>My Orders</Link></li>
                                   </>

                              }
                              {
                                   type === "Seller" &&
                                   <>
                                        <li className='mb-2 mt-5' ><Link className='font-semibold glass' to="/dashboard/addProducts">Add A product</Link></li>
                                        <li><Link className='font-semibold glass' to="/dashboard/myProducts">My product</Link></li>
                                   </>
                              }

                              {
                                   type === "Admin" &&
                                   <>
                                        <li><Link className='font-semibold mb-2 glass mt-5' to="/dashboard/allSellers">All Sellers</Link></li>
                                        <li><Link className='font-semibold mb-2 glass' to="/dashboard/allBuyers">All Buyer</Link></li>
                                        <li><Link className='font-semibold glass' to="/dashboard/reportedItems">Reported Items</Link></li>
                                   </>
                              }


                         </ul>



                    </div>
               </div>
          </div>
     );
};

export default DashboardLayout;
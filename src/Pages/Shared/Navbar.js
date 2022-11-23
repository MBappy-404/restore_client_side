import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image/20221123_223210.png'

const Navbar = () => {

     const menuItem = <>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">All Sellers</Link></li>
          <li><Link to="/about">All Buyer</Link></li>
          <li><Link to="/about">Add A product</Link></li>
          <li><Link to="/about">My orders</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log in</Link></li>
     </>
     return (

          <div className="navbar bg-indigo-400">
               
                    <div className="navbar-start md:ml-10">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                                   {menuItem}
                              </ul>
                         </div>
                         <img src={logo} className='w-44' alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal p-0">
                              {menuItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="dropdown dropdown-end mr-10 mr-0">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                   <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/80/80/people" alt='' />
                                   </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   <li>
                                        <a href=' ' className="justify-between">
                                             Profile
                                             <span className="badge">New</span>
                                        </a>
                                   </li>
                                   <li><a>Settings</a></li>
                                   <li><a>Logout</a></li>
                              </ul>
                         </div>
                    </div>
               
          </div>
     );
};

export default Navbar;
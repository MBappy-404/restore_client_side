import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image/20221123_223210.png'
import { AuthContext } from '../../AuthProvider/Auth';

const Navbar = () => {

     const { user, logOut } = useContext(AuthContext);

     const handleLogOut = () => {
          logOut()
               .then()
               .catch()

     }

     const menuItem = <>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {
               user?.uid ? <> <li><Link onClick={handleLogOut} to="/signup">Log Out</Link></li></> :
                    <>
                         <li><Link to="/signup">Sign Up</Link></li>
                         <li><Link to="/login">Log in</Link></li></>

          }
     </>
     return (

          <div className="navbar bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500  sticky top-0 z-50">

               <div className="navbar-start md:ml-10">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                              {menuItem}
                         </ul>
                    </div>
                    <img src={logo} className=' w-24 md:w-44' alt="" />
               </div>
               <div className="navbar-center ">
                    <ul className="menu menu-horizontal hidden text-white lg:flex p-0">
                         {menuItem}
                    </ul>
                    <div className=' lg:hidden navbar-end '>
                         <label tabIndex={1} htmlFor="Dashboard-drawer" className="btn btn-ghost  lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                    </div>
               </div>
               <div className="navbar-end">
                    <div className="dropdown dropdown-end md:mr-10 mr-0">
                         <label tabIndex={0} className="btn btn-ghost w-14  btn-circle avatar">
                              <div className="w-20 rounded-full">
                                   {
                                        user?.photoURL ? <img src={user?.photoURL} alt='' /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='' />
                                   }
                              </div>
                         </label>
                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 text-center p-2 shadow bg-base-100 rounded-box w-60">

                              <li>{user?.uid ? <span>{user?.displayName}</span> : ' '}</li>
                              <li>{user?.uid ? <span>{user?.email}</span> : ' '}</li>
                              <li>{user?.uid ? <span onClick={handleLogOut}>Log Out</span> : <span><Link to='/login'>Log In</Link></span>}</li>
                         </ul>
                    </div>
               </div>

          </div>
     );
};

export default Navbar;
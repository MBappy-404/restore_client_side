import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
import { AuthContext } from '../../AuthProvider/Auth';
import useToken from '../../Hooks/useToken';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';



const Signup = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const { createUser, updateUser } = useContext(AuthContext);
     const [signUpError, setSignupError] = useState('')
     const [createdUserEmail, setCreatedUserEmail] = useState('')
     const [token] = useToken(createdUserEmail);
     const navigate = useNavigate();
     const MySwal = withReactContent(Swal);

     if (token) {
          navigate('/');

     }

     const handleSignup = data => {


          createUser(data.email, data.password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    const userInfo = {

                         displayName: data.name
                    }
                    updateUser(userInfo)
                         .then(() => {
                              saveUser(data.name, data.email, data.password, data.type)
                         })

                         .catch(err => console.log(err))
               })
               .catch(err => {
                    setSignupError(err.message);
                    console.log(err.message);
               })
     }

     // store user from database 
     const saveUser = (name, email, password, type) => {

          const user = {
               name,
               email,
               password,
               type: type
          };

          fetch('http://localhost:5000/users', {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setCreatedUserEmail(email)
                    MySwal.fire({
                         title: 'Sign Success',
                         timer: 1500,
                         showConfirmButton: false,
                         icon: 'success',

                    });

               })

     }


     return (

          <div>
               <div className="min-w-screen min-h-screen  flex items-center justify-center px-10 py-20">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                         <div className="md:flex w-full">

                              {/* left image svg  */}
                              <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                                   <img src='https://nilgiricollege.ac.in/app/app-files/images/userlog.png' className='w-full mt-16' alt="" />
                              </div>
                              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                   <div className="text-center mb-10">
                                        <h1 className="font-bold text-3xl text-gray-900">Sign Up</h1>
                                        <p>Enter your information to Sign Up</p>
                                   </div>
                                   {/* form data  */}
                                   <form onSubmit={handleSubmit(handleSignup)}>
                                        {/* name  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                  <label for="" className="text-sm font-semibold px-1">First name</label>
                                                  <div className="flex">
                                                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                       <input type="text"
                                                            {...register("name", {
                                                                 required: "Name  is required"
                                                            })}
                                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your Name" />
                                                  </div>
                                                  <span className='text-red-600 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
                                             </div>
                                        </div>
                                        {/* select  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                  <label for="" className="text-sm font-semibold px-1">Select Your Type</label>
                                                  <div className="flex">
                                                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                       <select
                                                            {...register("type", {
                                                                 required: "type is required"
                                                            })}
                                                            className="type  w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                                            <option disabled selected>Buyer</option>
                                                            <option>Seller</option>

                                                       </select>
                                                  </div>
                                                  <span className='text-red-600 '> {errors.type && <p role="alert">{errors.type?.message}</p>}</span>
                                             </div>
                                        </div>
                                        {/* email  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                  <label for="" className="text-sm font-semibold px-1">Email</label>
                                                  <div className="flex">
                                                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                       <input type="email"
                                                            {...register("email", {
                                                                 required: "Email Address is required"
                                                            })}
                                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your Email" />
                                                  </div>
                                                  <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
                                             </div>
                                        </div>
                                        {/* password  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-8">
                                                  <label for="" className="text-sm font-semibold px-1">Password</label>
                                                  <div className="flex mb-2">
                                                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                       <input type="password"
                                                            {...register("password", {
                                                                 required: "Password is required",
                                                                 pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                                                                 minLength: { value: 6, message: "Password must be 6 characters or longer" }
                                                            })}
                                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your Password" />
                                                  </div>
                                                  <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
                                                  <small className=' ml-2 text-sm'>Already have an account <span className='text-indigo-500 link ml-2 font-bold'> <Link to='/login'>Log In</Link> </span> </small>
                                             </div>
                                        </div>
                                        {/* submit button  */}
                                        <div className="flex">
                                             <div className="w-full px-3 mb-5">
                                                  <input className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" value="Sign Up" type="submit" />
                                             </div>
                                             <div>
                                                  {signUpError && <p className=' text-center text-red-600'>{signUpError}</p>}
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

     )


};

export default Signup;
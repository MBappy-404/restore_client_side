import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../App.css'

const Signup = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();

     const handleSignup = data => {
          console.log(data);

          // createUser(data.email, data.password)
          //      .then(result => {
          //           const user = result.user;
          //           console.log(user);
          //           toast.success('Successfully toasted!')
          //           const userInfo = {

          //                displayName: data.name
          //           }
          //           updateUser(userInfo)
          //                .then(()=>{
          //                     saveUser(data.name, data.email, data.password)
          //                })

          //                .catch(err => console.log(err))
          //      })
          //      .then(err => console.log(err))
     }

     const handleGoogleSignup = () => {

          // googleProvider(provider)
          // .then(result =>{
          //      const user = result.user;
          //      console.log(user);
          //      navigate('/')
          // })
          // .catch(err => {
          //      console.log(err.message);

          // })
     }


     return (
         
          <div>
               <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-10 py-20">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                         <div className="md:flex w-full">

                              {/* left image svg  */}
                              <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                                <img src='https://nilgiricollege.ac.in/app/app-files/images/userlog.png'  className='w-full mt-16' alt="" />
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
                                                  <label for="" className="text-xs font-semibold px-1">First name</label>
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
                                        {/* email  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                  <label for="" className="text-xs font-semibold px-1">Email</label>
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
                                             <div className="w-full px-3 mb-12">
                                                  <label for="" className="text-xs font-semibold px-1">Password</label>
                                                  <div className="flex">
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
                                                  <small className='mt-5 flex justify-center text-sm'>Already Have Account <span className='text-indigo-500 ml-3 font-bold'> <Link to='/login'>Log In</Link> </span> </small>
                                             </div>
                                        </div>
                                        {/* submit button  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                 
                                                  <input className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" value="Sign Up" type="submit" />
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
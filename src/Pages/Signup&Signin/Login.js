import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../App.css'
import { AuthContext } from '../../AuthProvider/Auth';
import useToken from '../../Hooks/useToken';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const provider = new GoogleAuthProvider();
     const { signIn, googleProvider,loading,setLoading } = useContext(AuthContext);
     const [loginError, setLoginError] = useState();
     const [loginUserEmail, setLoginUserEmail] = useState('');
     const [token] = useToken(loginUserEmail);
     const navigate = useNavigate();
     const location = useLocation()
     const MySwal = withReactContent(Swal);
     const from = location.state?.from?.pathname || '/';

     if (token) {

          MySwal.fire({
               title: 'Login Success',
               icon: 'success',
               timer: 1500,
               showConfirmButton: false,
          });
          navigate(from, { replace: true });
     }

     const handleLogin = data => {
          setLoginError('')

          signIn(data.email, data.password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    
                    setLoginUserEmail(data.email)
                    setLoading(false)

               })
               .catch(err => {
                    setLoginError(err.message);
                    console.log(err.message);
               })
     }

     const googleSignIn = () => {

          googleProvider(provider)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    setLoginUserEmail(user.email)

                    const userData = {
                         name: user?.displayName,
                         email: user?.email,
                         type: 'Buyer'
                    }

                    fetch('https://restore-server.vercel.app/users', {
                         method: 'PUT',
                         headers: {
                              'content-type': 'application/json',
                         },
                         body: JSON.stringify(userData)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              if (data.acknowledged) {
                                   MySwal.fire({
                                        title: 'Login Success',
                                        icon: 'success',
                                        timer: 1500,
                                        showConfirmButton: false,
                                   });

                                   navigate('/')
                              }
                         })
               })
               .catch(err => {
                    console.log(err.message);
                    setLoginError(err.message)
               })
     }

     return (


          <div>
               <div className="min-w-screen min-h-screen  flex items-center justify-center px-10 py-20">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                         <div className="md:flex w-full">

                              {/* left image svg  */}
                              <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                                   <img src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-4571935-3805756.png" className='mt-24' alt="" />
                              </div>
                              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                   <div className="text-center mb-10">
                                        <h1 className="font-bold text-3xl text-gray-900">Log In</h1>
                                        <p>Enter your information to Login In</p>
                                   </div>
                                   {/* form data  */}
                                   <form onSubmit={handleSubmit(handleLogin)}>
                                        {/* email   */}
                                        <div className="flex -mx-3">
                                             <div className="w-full px-3 mb-5">
                                                  <label  className="text-sm font-semibold px-1">Email</label>
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
                                                  <label  className="text-sm font-semibold px-1">Password</label>
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
                                                  <small className='ml-3  text-sm'>New to Restore <span className='text-indigo-500 ml-2 link font-bold'> <Link to='/signup'>Sign Up</Link> </span> </small>
                                             </div>

                                        </div>
                                        {/* submit button  */}
                                        <div className="flex -mx-3">
                                             <div className="w-full  px-3 mb-5">

                                                  <input className="block  w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" value="Log in" type="submit" />

                                                 
                                                  <div>
                                                       {loginError && <p className='text-red-600 text-center'>{loginError}</p>}
                                                  </div>
                                                  <div className="divider w-72  m-auto mt-3 mb-3">Log in with</div>

                                                  <div className='flex justify-center'>
                                                         <img  onClick={googleSignIn}  src="https://freesvg.org/img/1534129544.png" alt="" className='w-8 cursor-pointer' /> 
                                                  </div>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
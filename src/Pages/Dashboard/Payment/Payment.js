import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import './CheckOutForm.css'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

     const order = useLoaderData();
     console.log(order);
     return (


          <div className=' '>

               <div>
                    <div className='text-center mt-5'>
                         <h1 className='text-3xl   font-bold text-primary'>Payment for - <p className='text-indigo-800 inline' >{order.product_name}</p> </h1>
                         <br />
                         <p className='text-xl text-indigo-600 font-semibold '>Please pay: <span className='text-lg font-bold'> ${order.product_price}</span> </p>
                    </div>
               </div>
               <div class="min-w-screen min-h-screen flex -mt-12 items-center justify-center pb-10">
                    <div class="w-full mx-auto rounded-lg bg-gray-200 shadow-2xl p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                         <div class="w-full pt-1 pb-5">
                              <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                   <i class="mdi mdi-credit-card-outline text-4xl"></i>
                              </div>
                         </div>
                         <div class="mb-4">
                              <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
                         </div>
                         <div class="mb-8 justify-center  flex -mx-2">
                              <div class="px-2">
                                   <label for="type1" class="flex items-center cursor-pointer">
                                        <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" alt='img' />
                                   </label>
                              </div>
                         </div>

                         <div className='w-96 m-auto text-white p-5'>
                              <Elements stripe={stripePromise}>
                                   <CheckOutForm
                                        order={order}
                                   />
                              </Elements>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default Payment;
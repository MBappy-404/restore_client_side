import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

     const order = useLoaderData();
     console.log(order);
     return (
          <div>
               <h1>Welcome to payment {order.product_name}</h1>
               <div className='text-center'>
                    <h1 className='text-4xl  mt-5 font-bold text-primary'>Payment for <p className='text-teal-300 inline' >{order.product_name}</p> </h1>
                    <br />
                    <p className='text-xl text-teal-300 '>Please pay ${order.product_price} </p>
               </div>

               <div className='w-96 m-auto text-white p-5'>
                    <Elements stripe={stripePromise}>
                         <CheckOutForm
                             order={order}
                         />
                    </Elements>
               </div>

          </div>
     );
};

export default Payment;
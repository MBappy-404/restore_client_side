import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

     const order = useLoaderData();
     console.log(order);
     return (
          <div>
               <h1>Welcome to payment {order.product_name}</h1>
               
          </div>
     );
};

export default Payment;
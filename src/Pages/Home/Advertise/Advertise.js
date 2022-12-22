import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../Category/BookingModal';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

     const { data: productsItem = [] } = useQuery({
          queryKey: ['productsItem'],
          queryFn: async () => {
               const res = await fetch('https://restore-server.vercel.app/category');
               const data = await res.json();
               return data;
          }

     })
     return (

          <div className='container m-auto my-16'>
                <h1 className='text-2xl  md:text-4xl font-bold text-indigo-500 text-center mt-5 mb-5'>Suggest For You</h1>

               <div className='flex flex-wrap  justify-center container '>
                    
                    {
                         productsItem.filter(products => { return products.ads === 'true' && !products.soldOut }).map( (product,i) => <AdvertiseCard
                         key={product._id}
                         product={product}
                         modalNumber={i + 1}
                         ></AdvertiseCard>)
                    }
               </div>
          </div>


     );
};

export default Advertise;
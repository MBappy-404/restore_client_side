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

        <div className='bg-gray-200 p-0'>
            <div className='container m-auto '>
                <h1 className='text-2xl  md:text-4xl font-bold text-indigo-500 text-center py-8 md:py-16'>Suggest For You</h1>

               <div  className='flex flex-wrap  justify-center container '>
                    
                    {
                         productsItem.filter(products => { return products.ads === 'true' && !products.soldOut }).map( (product,i) => <AdvertiseCard 
                         key={product._id}
                         product={product}
                         modalNumber={i + 1}
                         ></AdvertiseCard>)
                    }
               </div>
          </div>

        </div>

     );
};

export default Advertise;
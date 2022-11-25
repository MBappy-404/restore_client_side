import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

     const { data: products = [] } = useQuery({
          queryKey: ['products'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/category');
               const data = await res.json();
               return data;
          }

     })
     return (

          <div>
                <h1 className='text-3xl font-bold text-indigo-500 text-center mt-5 mb-5'>Trending Laptop</h1>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 container mb-5 m-auto'>
                    
                    {
                         products.filter(products => { return products.ads === 'true'}).map( product => <AdvertiseCard
                         key='product._id'
                         product={product}
                         ></AdvertiseCard>)
                    }
               </div>
          </div>


     );
};

export default Advertise;
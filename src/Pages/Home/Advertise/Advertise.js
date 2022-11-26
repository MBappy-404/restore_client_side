import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../Category/BookingModal';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

     const [products, setProducts] = useState(null)

     const { data: productsItem = [] } = useQuery({
          queryKey: ['productsItem'],
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
                         productsItem.filter(products => { return products.ads === 'true'}).map( product => <AdvertiseCard
                         key={product._id}
                         product={product}
                         setProducts={setProducts}
                         ></AdvertiseCard>)
                    }
               </div>
               {
               products &&
               <BookingModal
               products={products}
               setProducts={setProducts}
               >
               </BookingModal>
              }
          </div>


     );
};

export default Advertise;
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

          <div className='container m-auto my-16'>
                <h1 className='text-3xl font-bold text-indigo-500 text-center mt-5 mb-5'>Trending Laptops</h1>

               <div className='flex flex-wrap  justify-center container '>
               
                    
                    {
                         productsItem.filter(products => { return products.ads === 'true' && !products.soldOut }).map( product => <AdvertiseCard
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
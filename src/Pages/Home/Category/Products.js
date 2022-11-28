import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {

    
     const [products, setProducts] = useState(null)
     const productItem = useLoaderData()

    

     return (
          <div className='container m-auto'>
              <h1 className='text-3xl font-bold text-indigo-700'> Category:</h1>
               <div className='flex flex-wrap  justify-center container'>
                    {
                         productItem.map( product => <ProductCard
                         key={product.product_id}
                         product={product}
                         setProducts={setProducts}
                         ></ProductCard>)
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

export default Products;

import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {

     const {category_Name, product} = useLoaderData()
     const [products, setProducts] = useState(null)
    
     // console.log(Products);
     return (
          <div>
              <h1 className='text-3xl font-bold text-indigo-700'> Category: {category_Name}</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 '>
                    {
                         product.map( product => <ProductCard
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
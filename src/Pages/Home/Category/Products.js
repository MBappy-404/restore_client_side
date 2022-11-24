
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

     const {category_Name, product} = useLoaderData()
    
     // console.log(Products);
     return (
          <div>
              <h1 className='text-3xl font-bold text-indigo-700'> Category: {category_Name}</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 '>
                    {
                         product.map( product => <ProductCard
                         key={product.product_id}
                         product={product}
                         ></ProductCard>)
                    }
               </div>
          </div>
     );
};

export default Products;
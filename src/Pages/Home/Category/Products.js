import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {


     const productItem = useLoaderData();
     


     return (
          <div className='container m-auto my-16'>
               <h1 className='text-3xl font-bold text-indigo-700 ml-5 mb-10 -mt-5'>  Product Available: {productItem.filter(products => { return !products.soldOut }).length}</h1>
               <div className='flex flex-wrap  justify-center container'>
                    {
                         productItem.filter((products) => { return !products.soldOut }).map((product,i) => <ProductCard
                              key={product.product_id}
                              product={product}
                              modalNumber={i + 1}
                         ></ProductCard>)
                    }
               </div>
          </div>
     );
};

export default Products;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

     const { data: categories = [] } = useQuery({
          queryKey: ['categories'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/categories');
               const data = await res.json();
               return data;
          }

     })

     return (
          <div className='mb-10 mt-10 container m-auto'>
               <h1 className='text-indigo-600 font-bold text-4xl mb-8 text-center'>Laptop Categories</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-10 mb-5 m-auto '>

                    {
                         categories.map(category => <CategoryCard
                              key={category._id}
                              category={category}
                         ></CategoryCard>)
                    }
               </div>
          </div>
     );
};

export default Category;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

     const { data: categories = [] } = useQuery({
          queryKey: ['categories'],
          queryFn: async () => {
               const res = await fetch('https://restore-server.vercel.app/categories');
               const data = await res.json();
               return data;
          }

     })

     return (
          <div className='my-24 container m-auto' >
               <h1 className='text-indigo-600 font-bold text-3xl md:text-4xl mb-10 md:mb-12 text-center'>Laptop Categories For You</h1>
               <div className=' flex flex-wrap   justify-center container '>
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
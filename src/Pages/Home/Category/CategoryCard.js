import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css'

const CategoryCard = ({ category }) => {
     console.log(category);
     const { category_Name } = category;
     return (
          
          <div id='category' className="card category-card w-72 md:w-48   h-30 m-auto mb-3 bg-indigo-500 text-primary-content">
                         <div className="card-actions justify-center">
                              <button className="btn bg-indigo-700 glass hover:bg-indigo-800  w-full h-24"> <Link to={`/category/${category_Name}`}>{category_Name}</Link> </button>
                         </div>
                         <a href="https://mythrillfiction.com/" target="_blank"></a>
               </div>
              
     );
};

export default CategoryCard;
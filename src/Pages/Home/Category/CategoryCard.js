import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
     console.log(category);
     const { category_Name, category_id } = category;
     return (
          <div>
               <div className="card w-80 m-auto mb-3 bg-primary text-primary-content">
                    <div className="card-body">
                         <h2 className="card-title">{category_Name}</h2>
                         <div className="card-actions justify-end">
                              <button className="btn"> <Link to={`/category/${category_id}`}>Go</Link> </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CategoryCard;
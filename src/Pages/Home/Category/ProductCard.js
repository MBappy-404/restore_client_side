import React from 'react';

const ProductCard = ({ product }) => {
     const { name, logo, location, resale_rice, original_price, used, posted, seller_name, verify } = product;
     return (
          <div className='my-5'>
               <div className="card w-80 md:w-96 m-auto h-full   bg-indigo-300 shadow-xl">
                    <figure className="px-6 pt-6">
                         <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ml-5">
                         <h2 className="card-title text-xl mb-3 font-bold">{name}</h2>
                         <p className='text-md font-semibold'> Original Price:  <b>{original_price}</b></p>
                         <p className='text-md font-semibold'> Resale  Price:  <b>{resale_rice}</b></p>
                         <p className='text-md font-semibold'> Used Time: <b>{used}</b></p>
                         <p className='text-md font-bold'> Seller Name: {seller_name} {verify === "true" && <div className="badge badge-primary w-2 rounded-xl">✓</div> } </p>
                         <p className='text-md font-semibold'> Seller Location:  <b>{location}</b></p>
                         <div className="card-actions">
                              <button className="btn btn-primary">Book Now</button>
                         </div>

                         <div className='card-footer flex justify-end'> <small>{posted}</small> </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;
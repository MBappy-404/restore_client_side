import React from 'react';

const ProductCard = ({ product, setProducts }) => {
     const { name, logo, location, resale_rice, original_price, used, posted, seller_name,_id, verify, reported } = product;

     const handleReport = id =>{
          fetch(`http://localhost:5000/category/${id}`,{
               method: 'PUT',
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               
          })
     }
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
                         <p className='text-md font-semibold'> Seller Name: {verify === "true" ? <b>{seller_name} <div className="badge badge-primary w-2 rounded-xl">✓</div></b> : <> {seller_name} </>} </p>
                         <p className='text-md font-semibold'> Seller Location:  <b>{location}</b></p>

                         <div className="card-actions flex justify-center md:justify-between mr-5 mt-5">
                              <label onClick={() => setProducts(product)} htmlFor="bookingModal" className='btn btn-sm btn-primary'>
                                   Book Now
                              </label>
                             {
                              reported ? <button className='btn btn-sm'>Reported</button> :
                              <button onClick={()=> handleReport(_id)} className='btn btn-primary btn-sm'> Report to Admin</button>
                             }
                         </div>

                         <div className='card-footer flex justify-end'> <small>{posted}</small> </div>
                    </div>
               </div>
          </div>
     );
};

export default ProductCard;
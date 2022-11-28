import React from 'react';
import { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';

const AdvertiseCard = ({ product, setProducts }) => {

     const { user } = useContext(AuthContext);

     const { name, logo, location, resale_rice, original_price, used, posted, seller_name, verify, } = product;

     return (
          // <div className=''>

          //      <div className="card w-80 md:w-96  m-auto h-full   bg-indigo-300 shadow-xl">
          //           <div className="badge  badge-secondary -ml-5 ">hot</div>

          //           <figure className="px-6 pt-6">
          //                <img src={logo} alt="Shoes" className="rounded-xl" />
          //           </figure>
          //           <div className="card-body ml-5">
          //                <h2 className="card-title text-xl mb-3 font-bold">{name}</h2>
          //                <p className='text-md font-semibold'> Original Price:  <b>{original_price}</b></p>
          //                <p className='text-md font-semibold'> Resale  Price:  <b>{resale_rice}</b></p>
          //                <p className='text-md font-semibold'> Used Time: <b>{used}</b></p>
          //                <p className='text-md font-semibold'> Seller Name: {verify === "true" ? <b>{seller_name} <div className="badge badge-primary w-2 rounded-xl">✓</div></b> : <> {seller_name} </>} </p>
          //                <p className='text-md font-semibold'> Seller Location:  <b>{location}</b></p>
          //                <div className="card-actions flex justify-center md:justify-between mr-5 mt-5">
          //                     {/* advertise button action  */}
          //                     {
          //                          user?.uid ? <label onClick={() => setProducts(product)} htmlFor="bookingModal" className='btn btn-sm btn-primary'>Book Now</label>
          //                               :
          //                               <button className='btn btn-sm'> <Link to='/login'>Please login & book</Link> </button>
          //                     }
          //                </div>
          //                <div className='card-footer flex justify-end'> <small>{posted}</small> </div>
          //           </div>
          //      </div>
          // </div>


          <div className="w-96 sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
               
               <div href=" " className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 overflow-hidden">
                         <img className="absolute inset-0 h-full w-full object-cover" src={logo} alt="" />
                    </div>
                    <div className="p-4">
                         <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                         <h2 className="mt-2 mb-2  font-bold">{name}</h2>
                         {/* <p className="">{description.slice(0,100)}...</p> */}
                         <div className="mt-3 flex items-center">
                              <span className="text-lg font-semibold">Price:</span><span className="font-bold ml-2 text-xl">${resale_rice}</span>
                         </div>
                    </div>
                    <div className="p-2 ml-3 border-t border-b  text-gray-700">
                         <p>Seller Name:  {seller_name} {verify && <> <FaCheckCircle className='text-blue-500'></FaCheckCircle> </> } </p>
                         <p>Location: {location}</p>
                         <p>Original Price: ${original_price}</p>
                         <p>Resale Price: ${resale_rice}</p>
                         <p>Used: {used}</p>

                    </div>
                    <div className='border-b flex p-3 justify-center'>

                         {
                              user?.uid ? <label onClick={() => setProducts(product)} htmlFor="bookingModal" className='btn btn-sm btn-primary'>Book Now</label>
                                   :
                                   <button className='btn btn-sm'> <Link to='/login'>Please login & book</Link> </button>
                         }
                    </div>
                    <div className="p-4 flex items-center text-sm text-gray-600">
                         <span className="ml-2">Posted: {posted}</span></div>
               </div>
          </div>

     );
};

export default AdvertiseCard;
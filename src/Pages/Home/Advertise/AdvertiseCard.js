import React from 'react';
import { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';

const AdvertiseCard = ({ product, setProducts }) => {

     const { user } = useContext(AuthContext);
     const { name, logo, location, resale_rice, original_price, used, posted, seller_name, verify, } = product;

     return (
 
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
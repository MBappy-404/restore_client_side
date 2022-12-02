import React, { useContext } from 'react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../../AuthProvider/Auth';
import useAdmin from '../../../Hooks/useAdmin';
import BookingModal from './BookingModal';

const ProductCard = ({ product,modalNumber }) => {
  const MySwal = withReactContent(Swal);
  const { user } = useContext(AuthContext);
  const [type] = useAdmin(user?.email)
  const [products,setProducts]= useState()
  const { name, logo, location, resale_rice, description, original_price, used, posted, seller_name, _id, verify, reported } = product;

  const handleReport = id => {
    fetch(`https://restore-server.vercel.app/category/${id}`, {
      method: 'PUT',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {

          MySwal.fire({
            title: 'Product Reported Success',
            timer: 1500,
            showConfirmButton: false,
            icon: 'success',

          });
        }
      })
  }

  const handleAlert = () => {

    MySwal.fire({
      title: 'Warning',
      text: "Report to admin available only Buyers",
      showConfirmButton: true,
      icon: 'warning',

    });

  }
  return (

    <div className="w-96 sm:w-1/2 md:w-1/2 xl:w-1/4 p-4  ">
      <div href=" " className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full" src={logo} alt="" />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2 text-lg  font-bold">{name}</h2>
          <p className="text-sm">{description.slice(0, 100)}...</p>
          <div className=" flex items-center">
            <span className="text-lg font-semibold">Price:</span><span className="font-bold ml-2 text-xl">${resale_rice}</span>
          </div>
        </div>
        <div className="p-2 ml-3 border-t border-b  text-gray-700">
          <p>Seller Name: {seller_name} {verify && <> <FaCheckCircle className='text-primary text-xs inline'></FaCheckCircle> </>}</p>
          <p>Location: {location}</p>
          <p>Original Price: ${original_price}</p>
          <p>Resale Price: ${resale_rice}</p>
          <p>Used: {used}</p>

        </div>
        <div className='border-b flex p-3 justify-evenly'>

          <label onClick={() => setProducts(product)} htmlFor={`modal-${modalNumber}`} className='btn btn-xs'>
            Book Now
          </label>

          {
            type === 'Buyer' ? <>
              {
                reported ? <button className='btn btn-xs'>Reported</button> :
                  <button onClick={() => handleReport(_id)} className='btn btn-primary btn-xs'> Report to Admin</button>
              }
            </> : <button onClick={handleAlert} className='btn btn-primary btn-xs'>Report to Admin</button>
          }
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <span className="ml-2">Posted: {posted}</span></div>
      </div>

     {
      products &&
     

      <BookingModal product={product} setProducts={setProducts} modalId={modalNumber}></BookingModal>
     }
    </div>



  );
};

export default ProductCard;



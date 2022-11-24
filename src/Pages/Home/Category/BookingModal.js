import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/Auth';

const BookingModal = ({ products,setProducts }) => {
     const { name, original_price } = products;

     const { user } = useContext(AuthContext);

     const handleBooking = (event) => {

          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const product_Name = form.productName.value;
          const price = form.price.value;
          const number = form.phone.value;
          const location =form.meetLocation.value;

          const book = {name,email,product_Name,price,number,location};
          console.log(book);




          // setProducts(null)

     }
     return (
          <>
               {/* Put this part before </body> tag */}
               <input type="checkbox" id="bookingModal" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h3 className="text-lg font-bold">{name}</h3>
                         <form onSubmit={handleBooking} className='text-center mt-8'>
                              <input type="text" defaultValue={user?.displayName} readOnly name='name' className="input input-bordered mb-3 input-md w-full " />
                              <input type="text" readOnly defaultValue={user?.email} name='email' className="input input-bordered mb-3 input-md w-full " />
                              <input type="text" readOnly defaultValue={name} name='productName' className="input input-bordered mb-3 input-md w-full " />
                              <input type="text" readOnly defaultValue={original_price} name='price' className="input input-bordered mb-3 input-md w-full " />
                              <input type="text" name='phone' placeholder="Enter Your Contact Number" className="input input-bordered mb-3 input-md w-full " required />
                              <input type="text" name='meetLocation' placeholder="Enter Meeting Location" className="input input-bordered mb-3 input-md w-full" required />
                              <input type="submit" value='Submit' className="btn   mb-3 input-md w-full " />
                         </form>
                    </div>
               </div>
          </>
     );
};

export default BookingModal;
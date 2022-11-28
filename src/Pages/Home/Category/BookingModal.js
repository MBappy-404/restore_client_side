import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/Auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useAdmin from '../../../Hooks/useAdmin';

const BookingModal = ({ product,modalId }) => {
     const { name, resale_rice,logo,_id } = product;
     const MySwal = withReactContent(Swal);
     const { user } = useContext(AuthContext);
     const [type] = useAdmin(user?.email)


     const handleBooking = (event) => {
          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const product_Name = form.productName.value;
          const price = form.price.value;
          const number = form.phone.value;
          const location =form.meetLocation.value;

          // const book = {name,email,product_Name,price,number,location,_id};
          // console.log(book);

          const orders = {
               product_name: product_Name,
               buyer_name: name,
               email: email,
               product_price:price,
               phone: number,
               logo,
               location,
               product_id:_id
          }
          console.log(orders);
          // booked item store  database
          fetch('https://restore-server.vercel.app/orders',{
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(orders)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data.acknowledged){

                    MySwal.fire({
                         title: 'Booking Success',
                         icon: 'success',
                         text: 'Now you can see your order on Dashboard',
                         showConfirmButton: true,
                    });
               }
          })
     }
     return (
          <>
               {/* Put this part before </body> tag */}
               <input type="checkbox" id={`modal-${modalId}`} className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor={`modal-${modalId}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h3 className="text-lg font-bold text-center">Product: {name}</h3>
                         <form onSubmit={handleBooking} className='mt-8'>
                              <label>Your Name</label>
                              <input type="text" defaultValue={user?.displayName} readOnly name='name' className="input input-bordered mb-3 input-md w-full " />
                              <label>Your Email</label>
                              <input type="text" readOnly defaultValue={user?.email} name='email' className="input input-bordered mb-3 input-md w-full " />
                              <label>Product</label>
                              <input type="text" readOnly defaultValue={name} name='productName' className="input input-bordered mb-3 input-md w-full " />
                              <label>Price</label>
                              <input type="text" readOnly defaultValue={resale_rice} name='price' className="input input-bordered mb-3 input-md w-full " />
                              <label>Phone</label>
                              <input type="text" name='phone' placeholder="Enter Your Contact Number" className="input input-bordered mb-3 input-md w-full " required />
                              <label>Meet Location</label>
                              <input type="text" name='meetLocation' placeholder="Enter Meeting Location" className="input input-bordered mb-3 input-md w-full" required />
                             {
                              type === "Admin" && "Seller" ?  <p className=' no-animation text-white btn w-full font-semibold' >Only Buyers Can Book</p>:
                              <input type="submit" value='Submit' className="btn mb-3 input-md w-full " />
                              } 
                         </form>
                    </div>
               </div>
          </>
     );
};

export default BookingModal;
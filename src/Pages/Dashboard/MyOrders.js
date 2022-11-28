import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';

const MyOrders = () => {

     const { user } = useContext(AuthContext);

     const url = `https://restore-server.vercel.app/orders?email=${user?.email}`
     const { data: orders = [ ] } = useQuery({
          queryKey: ['orders', user?.email],
          queryFn: async () => {
               const res = await fetch(url,{
                    headers: {
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                     }
               });
               const data = await res.json();
               return data;
          }
          //  image, title, price, and a pay button. 

     })
     return (
          <div>
               <div className="overflow-x-auto">
                    <table className="table w-full">
                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>Product</th>
                                   <th>Product Name</th>
                                   <th>Price </th>
                                   <th>Payment Status</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   orders?.map((order, i) =>

                                        <tr key={order._id}>
                                             <th><p className='ml-2'>{i + 1}</p></th>
                                             <td>
                                                  <div className="avatar">
                                                       <div className="mask mask-squircle w-14 h-14">
                                                            <img src={order.logo} alt="Avatar" />
                                                       </div>
                                                  </div>
                                             </td>
                                             <td><p className='font-semibold'>{order.product_name}</p></td>
                                             <td><p className='font-semibold'>${order.product_price}</p></td>
                                             <td>{
                                                  
                                                  order.paid ? <p className=' btn-success no-animation text-black btn btn-sm  ml-6 font-semibold' >Paid</p> :
                                                  <button className='btn btn-primary btn-sm ml-2'><Link to={`/dashboard/payment/${order._id}`}>Pay now</Link></button>
                                                  
                                                  }

                                             </td>
                                        </tr>
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyOrders;
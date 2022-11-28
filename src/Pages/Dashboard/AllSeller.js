import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react';

const AllSeller = () => {

     const MySwal = withReactContent(Swal);

     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://restore-server.vercel.app/users');
               const data = await res.json();
               return data;
          }

     })

     //delete seller
     const handleDeleteUser = (seller) => {
          fetch(`https://restore-server.vercel.app/users/${seller._id}`, {
               method: 'DELETE'
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                         MySwal.fire({
                              title: 'Seller Delete Success',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false,
                         });

                    }
                    refetch()
               })
     }

     const handleVerify = (seller) => {

          

          fetch(`https://restore-server.vercel.app/category?email=${seller.email}`, {
               method:'PUT',
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {

                         MySwal.fire({
                              title: 'Seller Verify Success',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false,
                         });

                         refetch()
                    }

               })

     }
     return (
          <div>
               <div className="overflow-x-auto">
                    <table className="table w-full">
                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>seller Name</th>
                                   <th>seller Email</th>
                                   <th>Manage Seller</th>
                                   <th>Verify Status</th>

                              </tr>
                         </thead>
                         <tbody>
                              {
                                   users.filter(users => { return users.type === 'Seller' }).map((seller, i) =>
                                        <tr key={seller._id}>
                                             <th><p className='ml-3'>{i + 1}</p></th>
                                             <td><p className=' font-medium text-sm '>{seller.name}</p></td>
                                             <td><p className=' font-medium text-sm'>{seller.email}</p></td>
                                             <td><button onClick={() => handleDeleteUser(seller)} className='btn  btn-primary btn-sm ml-4'>Delete</button></td>
                                             <th>
                                                  {seller.verify === 'true' ?
                                                       <p className='text-sm ml-4 font-medium text-primary'>VERIFIED</p> :
                                                       <button onClick={()=>handleVerify(seller)} className='btn ml-4 btn-sm btn-info'>Verify</button>}
                                             </th>
                                        </tr>
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default AllSeller;
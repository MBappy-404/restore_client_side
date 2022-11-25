import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';

const AllSeller = () => {

     const {user} = useContext(AuthContext)
     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/users');
               const data = await res.json();
               return data;
          }

     })

     const handleDeleteUser = (seller) => {
          fetch(`http://localhost:5000/users/${seller._id}`, {
               method: 'DELETE'
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {

                    }
                    refetch()
               })
     }

     const handleUpdate = (seller) => {

          fetch(`http://localhost:5000/category/user?email=${seller}`, {
               method:'PUT',
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {

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
                                                       <button onClick={()=>handleUpdate(seller.email)} className='btn ml-4 btn-sm btn-info'>Verify</button>}
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
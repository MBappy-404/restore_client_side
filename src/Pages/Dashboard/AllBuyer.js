import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AllBuyer = () => {

     const MySwal = withReactContent(Swal);
     const { data: users = [],refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://restore-server.vercel.app/users');
               const data = await res.json();
               return data;
          }

     })

     const handleDeleteBuyer = (buyer) =>{
          fetch(`https://restore-server.vercel.app/users/${buyer._id}`,{
               method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                    MySwal.fire({
                         title: 'Buyer Delete Success',
                         icon: 'success',
                         timer: 1500,
                         showConfirmButton: false,
                    });
                     
               }
               refetch()
          })
     }
     return (
          <div>
               <div className="overflow-x-auto">
                    <table className="table w-full">
                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>Buyer Name</th>
                                   <th>Buyer Email</th>
                                   <th>Manage Buyer</th>
                                   
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   users.filter(users => { return users.type === 'Buyer'}).map((buyer, i) =>
                                        <tr key={buyer._id}>
                                             <th><p className='ml-3'>{i + 1}</p></th>
                                             <td><p className=' font-medium text-sm '>{buyer.name}</p></td>
                                             <td><p className=' font-medium text-sm'>{buyer.email}</p></td>
                                             <td><button onClick={()=>handleDeleteBuyer(buyer)} className='btn btn-primary btn-sm ml-4'>Delete</button></td>
                                        </tr>
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default AllBuyer;
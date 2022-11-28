import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ReportedItems = () => {

     const MySwal = withReactContent(Swal);

     const { data: products = [], refetch } = useQuery({
          queryKey: ['products',],
          queryFn: async () => {

               const res = await fetch('https://restore-server.vercel.app/category');
               const data = await res.json();
               return data;
          }
     });

     const handleDeleteProduct = product =>{

          fetch(`https://restore-server.vercel.app/category/${product._id}`, {
               method:'DELETE',
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {

                         MySwal.fire({
                              title: 'Product Delete Success',
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
                                   <th>Product Name</th>
                                   <th>Product Type</th>
                                   <th>Manage product</th>
                                  

                              </tr>
                         </thead>
                         <tbody>
                              {
                                   products.filter(product => { return product.reported === 'true' }).map((product, i) =>
                                        <tr key={product._id}>
                                             <th><p className='ml-3'>{i + 1}</p></th>
                                             <td><p className=' font-medium text-sm '>{product.name}</p></td>
                                             <td><p className=' font-medium text-sm'>
                                                  {product.reported === 'true' &&  <button className='btn btn-sm btn-warning'>Reported</button>  }
                                                  </p></td>
                                             <td><button onClick={() => handleDeleteProduct(product)} className='btn btn-primary btn-sm ml-4'>Delete</button></td>
                                        </tr>
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ReportedItems;
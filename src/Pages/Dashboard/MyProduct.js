import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'


const MyProduct = () => {
     const { user } = useContext(AuthContext);
     const MySwal = withReactContent(Swal);

     const url = `https://restore-server.vercel.app/myProducts?email=${user?.email}`
     const { data: products = [],refetch } = useQuery({
          queryKey: ['products', user?.email],
          queryFn: async () => {
               const res = await fetch(url)
               const data = await res.json()
               return data;
          }

     })

     const handleDeleteProduct = (product) =>{
          fetch(`https://restore-server.vercel.app/myProducts/${product._id}`,{
               method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){

                    MySwal.fire({
                         title: 'Product Delete Success',
                         icon: 'success',
                         timer: 1500,
                         showConfirmButton: false,
                    });   
               }
               refetch()
          })

     }

     const handleAdds = (product) =>{

          fetch(`https://restore-server.vercel.app/ads/${product._id}`,{
               method: 'PUT'
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data.acknowledged){
                     
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
                                   <th>Product Name</th>
                                   <th>Product Price</th>
                                   <th>Sales Status </th>
                                   <th>advertise</th>
                                   <th>Manage Product</th>
                              </tr>
                         </thead>
                         <tbody>

                              {
                                   products.map((product, i) =>

                                        <tr key={product._id}>
                                             <th>{i+1}</th>
                                             <td>{product.name}</td>
                                             <td>{product.resale_rice}</td>
                                             <td> 
                                                  {
                                                       product.soldOut ? <button className='btn btn-xs no-animation'>Sold out</button> :
                                                       <button className='btn btn-primary btn-xs no-animation' >Available</button> 
                                                  }

                                             </td>
                                             <td>
                                                  {
                                                       product.ads ? <button className='btn btn-xs no-animation'>Running</button> :
                                                       <button onClick={() => handleAdds(product)} className='btn btn-success btn-xs'>Turn On</button>
                                                  }
                                             </td>
                                             <td><button onClick={()=>handleDeleteProduct(product)} className='btn btn-warning btn-xs ml-7'>Delete</button></td>
                                        </tr>
                                   )
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyProduct;
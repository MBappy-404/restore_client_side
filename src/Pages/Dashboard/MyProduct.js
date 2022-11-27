import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';

const MyProduct = () => {
     const { user } = useContext(AuthContext);

     const url = `http://localhost:5000/myProducts?email=${user?.email}`
     const { data: products = [],refetch } = useQuery({
          queryKey: ['products', user?.email],
          queryFn: async () => {
               const res = await fetch(url)
               const data = await res.json()
               return data;
          }

     })

     const handleDeleteProduct = (product) =>{
          fetch(`http://localhost:5000/myProducts/${product._id}`,{
               method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                     
               }
               refetch()
          })

     }

     const handleAdds = (product) =>{

          fetch(`http://localhost:5000/ads/${product._id}`,{
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
                                                       product.soldOut ? <button className='btn btn-xs'>Sold out</button> :
                                                       <button className='btn btn-primary btn-xs'>Available</button> 
                                                  }

                                             </td>
                                             <td>
                                                  {
                                                       product.ads ? <button className='btn btn-xs'>Running</button> :
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
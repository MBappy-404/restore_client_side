import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';

const MyOrders = () => {

     const {user} = useContext(AuthContext);

     const url = `http://localhost:5000/category?email=${user?.email}`
     const { data: orders = [],refetch } = useQuery({
          queryKey: ['orders', user?.email],
          queryFn: async () => {
               const res = await fetch(url);
               const data = await res.json();
               return data;
          }

     })
     return (
          <div>
               
          </div>
     );
};

export default MyOrders;
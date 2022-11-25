import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
     return (
          <div>
          
               <Banner></Banner>
               <Category></Category>
               <Advertise></Advertise>
               
          </div>
     );
};

export default Home;
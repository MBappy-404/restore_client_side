import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import OverView from '../OverView/OverView';

const Home = () => {
     return (
          <div>
          
               <Banner></Banner>
               <Category></Category>
               <Advertise></Advertise>
               <OverView></OverView>
               
          </div>
     );
};

export default Home;
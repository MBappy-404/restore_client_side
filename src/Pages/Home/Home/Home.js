import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import OverView from '../OverView/OverView';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
          
               <Banner></Banner>
               <About></About>
               <Category></Category>
               <OverView></OverView>
               <Advertise></Advertise>
               <Testimonials></Testimonials>
               
          </div>
     );
};

export default Home;
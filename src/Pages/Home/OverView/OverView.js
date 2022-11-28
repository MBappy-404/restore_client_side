import React from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle, FaGrinAlt, FaShoppingCart, FaThumbsUp } from 'react-icons/fa';
import './OverView.css'

const OverView = () => {
     return (
          <div className='overview mt-16 m-auto'>
               <div className=''>
                    <div className='grid grid-cols-2 text-center text-2xl text-white font-bold md:grid-cols-4 p-5'>
                         <div className='mb-28  mt-5 md:mt-28  p-0 md:p-10'>

                              <p className='mb-3'><FaThumbsUp className='text-6xl text-blue-500 m-auto' /></p>
                              <p className='mb-3 mt-3 text-3xl'> <CountUp
                                   start={0}
                                   end={100}
                                   duration={5}
                              />%</p>
                              <h1>Customer Satisfaction</h1>
                         </div>
                         <div className='mb-28  mt-5 md:mt-28 p-0 md:p-10'>
                              <p className='mb-3'><FaShoppingCart className='text-6xl text-yellow-500 m-auto' /></p>
                              <p className='mb-3 mt-3 text-3xl'> <CountUp
                                   start={0}
                                   end={10}
                                   duration={5} /></p>
                              <h1>Years in  Market</h1>
                         </div>
                         <div className='mb-28  mt-5 md:mt-28 p-0 md:p-10'>
                              <p className='mb-3'><FaGrinAlt className='text-6xl text-orange-500 m-auto' /></p>
                              <p className='mb-3 mt-3 text-3xl'><CountUp
                                   start={0}
                                   end={2300}
                                   duration={5} />+</p>
                              <h1>Happy Customer</h1>
                         </div>
                         <div className='mb-28  mt-5 md:mt-28 p-0  md:p-10'>
                              <p className='mb-3'><FaCheckCircle className='text-6xl text-green-600 m-auto ' /></p>
                              <p className='mb-3 mt-3 text-3xl'> <CountUp
                                   start={0}
                                   end={5000}
                                   duration={5} />+</p>
                              <h1>Orders Complete</h1>
                         </div>
                    </div>
               </div>
          </div>

           

         
     );
};

export default OverView;
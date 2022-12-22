import React from 'react';

const Location = () => {
     return (
        
               
<div  className="container  mx-auto">
  <section className="mb-20  text-center">
  <h1 className='text-2xl md:text-4xl text-center text-indigo-500 font-semibold mb-10'>Our Location</h1>
    <div  data-aos="zoom-in-up" className="px-4 py-5 md:px-0 ">
      <div className="container mx-auto  xl:px-32">
        <div className="items-center">
          <div className="md:mb-12 lg:mb-0">
          <div className="map-container h-[500px]  relative shadow-lg rounded-lg" style={{zIndex: '-1'}}>
              {/* <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" className="left-0 top-0 h-full w-full absolute rounded-lg" frameborder="0" allowFullScreen></iframe> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.9779896671566!2d88.5998012656783!3d24.372984016258822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefad023fd3b5%3A0x91e5843fe8317ba2!2sTheme%20Omor%20Plaza!5e1!3m2!1sen!2sbd!4v1671639280975!5m2!1sen!2sbd" className='w-full h-full' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

</div>

         
     );
};

export default Location;
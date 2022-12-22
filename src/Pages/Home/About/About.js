import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-200'>
      <div className="container flex flex-col-reverse md:flex justify-center  p-6 mx-auto sm:py-5 lg:py-14 lg:flex-row lg:justify-evenly">
        <div data-aos="zoom-in" className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src='https://www.insuranceage.co.uk/sites/default/files/styles/landscape_750_463/public/import/IMG/222/342222/buy-sell-business-generic-1.jpeg?h=b638f7a1&itok=eXaDMnq1' alt="" className=" h-72 sm:h-96 lg:h-full xl:h-112 2xl:h-128" />
        </div>
        <div data-aos="zoom-in" className="flex flex-col  justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className='text-2xl md:text-3xl text-indigo-500 font-semibold mb-3 '>About Us</h1>
          <h1 className="text-2xl mb-3 font-bold leading-none md:text-4xl">Few Words About<span className="dark:text-violet-700"> Restore</span></h1>
          <p className="mt-2 mb-6 text-sm text-gray-700 md:text-lg">Restore has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options...</p>
          <div className="flex flex-col m-auto md:m-0 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className='btn btn-primary no-animation   w-40'>Learn More</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
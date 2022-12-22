import React from 'react';
import banner from '../../../Assets/image/Banner_Laptop.svg'

const Banner = () => {
  return (
    <div >
      <section  className=" bg-animated text-white">
        <div  className="container flex flex-col-reverse md:flex justify-center  p-6 mx-auto sm:py-12 lg:py-14 lg:flex-row lg:justify-evenly">
          <div data-aos="zoom-in" className="flex flex-col  justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none md:text-5xl">Welcome To <span className="dark:text-violet-400">Restore</span><br />
            <span className=' text-lg '>  Restore Your  Old Laptop</span>
            </h1>
            <p className="mt-2 mb-6 text-xs text-gray-300 md:text-lg">Restore is a platform on which you can buy and sell Laptop! We help people buy and sell Laptops for our customers.
            </p>
            <div className="flex flex-col m-auto md:m-0 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
             <button className='btn glass bg-indigo-800 w-40'>Get Started</button>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={banner} alt="" className=" hero h-72 sm:h-96 lg:h-full xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
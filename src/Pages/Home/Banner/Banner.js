import React from 'react';

const Banner = () => {
     return (
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://dlcdnwebimgs.asus.com/files/media/32AC71C1-A967-4B4A-A81C-23AB82184698/v3/images/large/1x/01__kv_rog_flow_x16.jpg")` }}>
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold text-indigo-200">Welcome To Restore</h1>
              <p className="text-2xl font-semi-bold">Buy Your Favorite Laptop</p>
              <p className=" text-2xl font-semibold">Sell Your Old Laptop</p>
            
            </div>
          </div>
        </div>
     );
};

export default Banner;
import React from 'react';

const Banner = () => {
     return (
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://dlcdnwebimgs.asus.com/files/media/32AC71C1-A967-4B4A-A81C-23AB82184698/v3/images/large/1x/01__kv_rog_flow_x16.jpg")` }}>
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
     );
};

export default Banner;
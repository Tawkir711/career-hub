import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/7PsgSX1X/user.png"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br /> Dream Job
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-grad">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import React from "react";
import img from "../../assets/image/munim.jpg";

const Hero = () => {
  return (
    <div className="mt-5 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-row-reverse place-items-center">
        <div className="px-5 sm:ps-14 mt-5 md:mt-0 order-last md:order-first">
          <p className="text-xl">Hello👋, I'm</p>
          <h1 className="text-3xl sm:text-5xl font-bold">Munim Rahman</h1>
          <p className="text-base mt-5">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div className="mt-5">
            <button className="btn me-2">Let's Talk</button>
            <button className="btn">Get Resume</button>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-center">
            <img
              src={img}
              className="w-52 h-52 md:w-80 md:h-80 rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

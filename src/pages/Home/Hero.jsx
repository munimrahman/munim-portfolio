import React, { useEffect } from "react";
import img from "../../assets/image/munim_3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-2 md:mt-0 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-row-reverse place-items-center">
        <div className="px-5 sm:ps-14 mt-5 md:mt-0 order-last md:order-first">
          <p className="text-xl text-primary" data-aos="fade-up">
            Hello👋, I'm
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold text-sky-500"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Munim Rahman
          </h1>
          <p
            className="text-primary my-2 md:my-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Working full time in{" "}
            <span className="border-b border-sky-500 text-sky-500">
              JavaScript
            </span>
            ,{" "}
            <span className="border-b border-sky-500 text-sky-500">React</span>{" "}
            & <span className="border-b border-sky-500 text-sky-500">Node</span>
            . Passionate about creating innovative solutions with high-quality
            code that meets the needs of both users and clients.
          </p>
          <div
            className="my-1 md:my-2 flex gap-3 text-xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="https://web.facebook.com/munimrh/" target="_blank">
              <i className="fab fa-facebook text-[#2173EB]"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/munimrahman/" target="_blank">
              <i className="fab fa-linkedin text-[#1473AF]"></i>
            </Link>
            <Link to="https://github.com/munimrahman" target="_blank">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="https://www.youtube.com/@munim-rahman" target="_blank">
              <i className="fab fa-youtube text-[#F60501]"></i>
            </Link>
            <Link to="https://medium.com/@munimrahman" target="_blank">
              <i className="fab fa-medium"></i>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <Link
              to={"/contact"}
              className="text-primary border-b-2 border-sky-500 px-1 text-lg uppercase me-3"
            >
              Let's Talk
              <i className="fas fa-comment-dots text-sky-500 ms-2"></i>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1J-lFWNe8CtoiqLPeqlj-FKRMgKRC-xEG/view"
              target="_blank"
              className="text-primary border-b-2 border-sky-500 px-1 text-lg uppercase"
            >
              Get Resume
              <i className="fas fa-cloud-download-alt text-sky-500 ms-2"></i>
            </Link>
          </div>
        </div>
        <div className="mt-3" data-aos="fade-left" data-aos-duration="1500">
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

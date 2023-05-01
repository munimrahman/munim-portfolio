import React from "react";
import proPeak from "../../assets/image/pro-s.png";
import travel from "../../assets/image/travel-s.png";
import kitty from "../../assets/image/kitti-s.png";
import ReactTag from "../../components/Tags/ReactTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import NodeTag from "../../components/Tags/NodeTag";
import ExpressTag from "../../components/Tags/ExpressTag";
import MongoTag from "../../components/Tags/MongoTag";
import TailwindTag from "../../components/Tags/TailwindTag";
import MongooseTag from "../../components/Tags/MongooseTag";
import BootstrapTag from "../../components/Tags/BootstrapTag";
import JwtTag from "../../components/Tags/JwtTag";

import { Link } from "react-router-dom";
import FirebaseTag from "../../components/Tags/FirebaseTag";

const LatestProjects = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-bold">Latest Projects</h1>
        <p className="text-lg font-light text-gray-500 md:text-xl mt-2">
          Things I've Built Recently
        </p>
      </div>
      <div className="grid  md:grid-cols-3 place-items-center gap-8 mt-8 px-5">
        {/* Project One */}
        <div data-aos="fade-up-right" data-aos-duration="1000">
          <div className="card bg-base-100 shadow-xl">
            <figure className="bg-sky-500 h-44">
              <img src={proPeak} className="w-full" alt="" />
            </figure>
            <div className="p-5">
              <h2 className="text-xl text-primary font-bold">Pro Peak</h2>
              <h3 className="text- text-gray-500 font-light">
                MERN Stack Job Portal
              </h3>

              <div className="flex flex-wrap my-3 gap-1">
                <TailwindTag />
                <ReactTag />
                <ReduxTag />
                <NodeTag />
                <ExpressTag />
                <MongoTag />
                <MongooseTag />
              </div>
              <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
                <span className="hover:text-black">
                  <Link
                    to="https://pro-peak.netlify.app/"
                    target="_blank"
                    className="text-sm underline"
                  >
                    <i className="fas fa-link text-xs me-1"></i>
                    Live Link
                  </Link>
                </span>
                <div>
                  <span className="hover:text-black">
                    <Link
                      to="https://github.com/munimrahman/pro-peak-job-portal"
                      target="_blank"
                      className="text-sm underline me-2"
                    >
                      <i className="fas fa-code text-xs me-1"></i>
                      Client
                    </Link>
                  </span>
                  <span className="hover:text-black">
                    <Link
                      to="https://github.com/munimrahman/pro-peak-server"
                      target="_blank"
                      className="text-sm underline me-2"
                    >
                      <i className="fas fa-code text-xs me-1"></i>
                      Server
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="bg-sky-500 h-44">
            <img src={travel} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl text-primary font-bold">Travelerz</h2>
            <h3 className="text- text-gray-500 font-light">
              MERN Stack Travel Booking Site
            </h3>

            <div className="flex flex-wrap my-3 gap-1">
              <BootstrapTag />
              <ReactTag />
              <NodeTag />
              <ExpressTag />
              <MongoTag />
              <FirebaseTag />
            </div>
            <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
              <span className="hover:text-black">
                <Link
                  to="https://travelerz-munim.web.app/"
                  target="_blank"
                  className="text-sm underline"
                >
                  <i className="fas fa-link text-xs me-1"></i>
                  Live Link
                </Link>
              </span>
              <div>
                <span className="hover:text-black">
                  <Link
                    to="https://github.com/munimrahman/travelerz-client"
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Client
                  </Link>
                </span>
                <span className="hover:text-black">
                  <Link
                    to="https://github.com/munimrahman/travelerz-server"
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Server
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Project Three */}
        <div data-aos="fade-up-left" data-aos-duration="1000">
          <div className="card bg-base-100 shadow-xl">
            <figure className="bg-sky-500 h-44">
              <img src={kitty} className="w-full" alt="" />
            </figure>
            <div className="p-5">
              <h2 className="text-xl text-primary font-bold">Kitty City</h2>
              <h3 className="text- text-gray-500 font-light">
                MERN Stack Pet Shop
              </h3>

              <div className="flex flex-wrap my-3 gap-1">
                <BootstrapTag />
                <ReactTag />
                <NodeTag />
                <ExpressTag />
                <MongoTag />
                <FirebaseTag />
              </div>
              <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
                <span className="hover:text-black">
                  <Link
                    to="https://kitty-city-8e788.web.app/"
                    target="_blank"
                    className="text-sm underline"
                  >
                    <i className="fas fa-link text-xs me-1"></i>
                    Live Link
                  </Link>
                </span>
                <div>
                  <span className="hover:text-black">
                    <Link
                      to="https://github.com/munimrahman/kitty-city-client"
                      target="_blank"
                      className="text-sm underline me-2"
                    >
                      <i className="fas fa-code text-xs me-1"></i>
                      Client
                    </Link>
                  </span>
                  <span className="hover:text-black">
                    <Link
                      to="https://github.com/munimrahman/kitty-city-server"
                      target="_blank"
                      className="text-sm underline me-2"
                    >
                      <i className="fas fa-code text-xs me-1"></i>
                      Server
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;

import React from "react";
import FeaturedProject from "./FeaturedProject";
import travel from "../../assets/image/travel-s.png";
import lms from "../../assets/image/lws-s.png";
import physio from "../../assets/image/phy-s.png";
import task from "../../assets/image/task-s.png";
import kitty from "../../assets/image/kitti-s.png";
import course from "../../assets/image/course-s.png";
import BootstrapTag from "../../components/Tags/BootstrapTag";
import ReactTag from "../../components/Tags/ReactTag";
import NodeTag from "../../components/Tags/NodeTag";
import ExpressTag from "../../components/Tags/ExpressTag";
import MongoTag from "../../components/Tags/MongoTag";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ReduxTag from "../../components/Tags/ReduxTag";
import TailwindTag from "../../components/Tags/TailwindTag";
import FirebaseTag from "../../components/Tags/FirebaseTag";

const Projects = () => {
  useTitle("Projects | Munim Rahman");
  return (
    <div className="mt-5 px-5">
      <h1 className="text-4xl underline font-hand mb-5">Projects</h1>
      <div data-aos="fade-left" data-aos-duration="1000">
        <FeaturedProject />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {/* Project One */}
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
        {/* Project Two */}
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
        {/* Project Three */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="bg-sky-500 h-44">
            <img src={lms} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl text-primary font-bold">Learning Portal</h2>
            <h3 className="text- text-gray-500 font-light">
              React, RTK Query Learning Portal
            </h3>

            <div className="flex flex-wrap my-3 gap-1">
              <TailwindTag />
              <ReactTag />
              <ReduxTag />
            </div>
            <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
              <span className="hover:text-black">
                <Link
                  to="https://lws-lms-munim.netlify.app/"
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
                    // TODO: place github link
                    to=""
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Github Code
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Project Four */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="bg-sky-500 h-44">
            <img src={task} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl text-primary font-bold">Task Manager</h2>
            <h3 className="text- text-gray-500 font-light">
              React Redux Task Manager
            </h3>

            <div className="flex flex-wrap my-3 gap-1">
              <TailwindTag />
              <ReactTag />
              <ReduxTag />
            </div>
            <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
              <span className="hover:text-black">
                <Link
                  to="https://monumental-sable-3e21f3.netlify.app/"
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
                    // TODO: place github link
                    to=""
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Github Code
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Project Five */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="bg-sky-500 h-44">
            <img src={physio} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl text-primary font-bold">My Physio</h2>
            <h3 className="text- text-gray-500 font-light">
              React Physio Therapy Website
            </h3>

            <div className="flex flex-wrap my-3 gap-1">
              <BootstrapTag />
              <ReactTag />
              <FirebaseTag />
            </div>
            <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
              <span className="hover:text-black">
                <Link
                  to="https://health-care-munimrh.web.app/"
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
                    to="https://github.com/munimrahman/health-care-myPhysio"
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Github Code
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Project Six */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="bg-sky-500 h-44">
            <img src={course} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <h2 className="text-xl text-primary font-bold">Brilian Academy</h2>
            <h3 className="text- text-gray-500 font-light">
              React Course Landing Page
            </h3>

            <div className="flex flex-wrap my-3 gap-1">
              <BootstrapTag />
              <ReactTag />
            </div>
            <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
              <span className="hover:text-black">
                <Link
                  to="https://brilian-academy.netlify.app/"
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
                    to="https://github.com/munimrahman/brilian-academy"
                    target="_blank"
                    className="text-sm underline me-2"
                  >
                    <i className="fas fa-code text-xs me-1"></i>
                    Github Code
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

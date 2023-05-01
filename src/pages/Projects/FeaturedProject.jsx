import React from "react";
import ReactTag from "../../components/Tags/ReactTag";
import DaisyTag from "../../components/Tags/DaisyTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import NodeTag from "../../components/Tags/NodeTag";
import ExpressTag from "../../components/Tags/ExpressTag";
import MongoTag from "../../components/Tags/MongoTag";
import TailwindTag from "../../components/Tags/TailwindTag";
import MongooseTag from "../../components/Tags/MongooseTag";
import proPeak from "../../assets/image/pro-s.png";
import { Link } from "react-router-dom";
import JwtTag from "../../components/Tags/JwtTag";

const FeaturedProject = () => {
  return (
    <div className="grid grid-cols-1 md:gap-5 md:grid-cols-12 rounded-xl shadow-xl border bg-white">
      <figure className="col-span-5">
        <img
          src={proPeak}
          alt="Album"
          className="w-full h-full rounded-tl-xl rounded-tr-xl md:rounded-l-xl md:rounded-tr-none"
        />
      </figure>
      <div className="md:col-span-7 px-4 pb-4 md:p-5">
        <h2 className="text-xl font-bold hover:text-primary mt-2 hover:cursor-pointer">
          Pro Peak
        </h2>
        <h3 className="text-gray-500 text-lg">MERN Stack Job Portal</h3>
        <p className="py-2">
          Pro Peak is a MERN stack job portal. I am currently working on this
          project. I have planed some idea to implement in this site. Which are
          given below - 1. State Management with Redux & RTK Query, 2. JWT
          Authentication, 3. User, Job and etc CRUD, 4. Real Time Chat etc.
        </p>
        <div className="flex flex-wrap my-1 gap-1">
          <TailwindTag />
          <DaisyTag />
          <ReactTag />
          <ReduxTag />
          <NodeTag />
          <ExpressTag />
          <MongoTag />
          <MongooseTag />
          <JwtTag />
        </div>
        <div className="mt-3 flex flex-wrap justify-between items-center">
          <span className="text-gray-500 hover:text-black">
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
            <span className="text-gray-500 hover:text-black">
              <Link
                to="https://github.com/munimrahman/pro-peak-job-portal"
                target="_blank"
                className="text-sm underline me-2"
              >
                <i className="fas fa-code text-xs me-1"></i>Client Code
              </Link>
            </span>
            <span className="text-gray-500 hover:text-black">
              <Link
                to="https://github.com/munimrahman/pro-peak-server"
                target="_blank"
                className="text-sm underline me-2"
              >
                <i className="fas fa-code text-xs me-1"></i>Server Code
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

import React from "react";
import project from "../../assets/image/pro-s.png";
import ReactTag from "../../components/Tags/ReactTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import NodeTag from "../../components/Tags/NodeTag";
import ExpressTag from "../../components/Tags/ExpressTag";
import MongoTag from "../../components/Tags/MongoTag";
import TailwindTag from "../../components/Tags/TailwindTag";
import JavaScriptTag from "../../components/Tags/JavaScriptTag";

const ProjectCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="bg-sky-500">
        <img src={project} className="w-full" alt="" />
      </figure>
      <div className="p-5">
        <h2 className="text-xl text-primary font-bold">Pro Peak</h2>
        <h3 className="text- text-gray-500 font-light">
          MERN Stack Job Portal
        </h3>

        <div className="flex flex-wrap my-3 gap-1">
          <ReactTag />
          <ReduxTag />
          <NodeTag />
          <ExpressTag />
          <MongoTag />
          <TailwindTag />
          <JavaScriptTag />
        </div>
        <div className="mt-3 flex text-gray-500 flex-wrap justify-between items-center">
          <span>
            <i className="fas fa-link text-xs me-1"></i>
            <a className="text-sm underline">Live Link</a>
          </span>
          <div>
            <span>
              <i className="fas fa-code text-xs me-1"></i>
              <a className="text-sm underline me-2">Client</a>
            </span>
            <span>
              <i className="fas fa-code text-xs me-1"></i>
              <a className="text-sm underline me-2">Server</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard";

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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default LatestProjects;

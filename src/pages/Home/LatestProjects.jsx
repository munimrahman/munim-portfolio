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
        <div data-aos="fade-up-right" data-aos-duration="1000">
          <ProjectCard />
        </div>
        <ProjectCard />
        <div data-aos="fade-up-left" data-aos-duration="1000">
          <ProjectCard />{" "}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;

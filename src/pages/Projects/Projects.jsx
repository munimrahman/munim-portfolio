import React from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "../Home/ProjectCard";

const Projects = () => {
  return (
    <div className="mt-5 md:mt-10 px-5">
      <h1 className="text-4xl underline font-hand mb-5">Projects</h1>
      <div data-aos="fade-left" data-aos-duration="1000">
        <FeaturedProject />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

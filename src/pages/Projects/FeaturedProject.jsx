import React from "react";
import ReactTag from "../../components/Tags/ReactTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import NodeTag from "../../components/Tags/NodeTag";
import ExpressTag from "../../components/Tags/ExpressTag";
import MongoTag from "../../components/Tags/MongoTag";
import TailwindTag from "../../components/Tags/TailwindTag";

const FeaturedProject = () => {
  return (
    <div className="grid grid-cols-1 md:gap-5 md:grid-cols-12 rounded-xl shadow-xl border bg-white">
      <figure className="col-span-5">
        <img
          src="https://pro-peak.netlify.app/static/media/img-news1.f67b4022b9711bda254b.png"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          consequatur sapiente quaerat in dolor id eos vitae voluptates magnam
          omnis, rerum, saepe adipisci nesciunt quasi vero quidem obcaecati
          blanditiis incidunt.
        </p>
        <div className="flex flex-wrap my-1 gap-1">
          <ReactTag />
          <ReduxTag />
          <NodeTag />
          <ExpressTag />
          <MongoTag />
          <TailwindTag />
        </div>
        <div className="mt-3 flex flex-wrap justify-between items-center">
          <span>
            <i class="fas fa-link text-xs me-1"></i>
            <a className="text-sm underline">Live Link</a>
          </span>
          <div>
            <span>
              <i class="fas fa-code text-xs me-1"></i>
              <a className="text-sm underline me-2">Client Code</a>
            </span>
            <span>
              <i class="fas fa-code text-xs me-1"></i>
              <a className="text-sm underline me-2">Server Code</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

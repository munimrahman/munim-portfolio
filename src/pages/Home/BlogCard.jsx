import React from "react";
import blog from "../../assets/image/blog.png";
import ReactTag from "../../components/Tags/ReactTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import NodeTag from "../../components/Tags/NodeTag";

const BlogCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img src={blog} className="w-full" alt="" />
      </figure>
      <div className="p-5">
        <div className="flex flex-wrap gap-x-1 pb-3">
          <ReactTag />
          <ReduxTag />
          <NodeTag />
        </div>
        <h2 className="text-lg font-bold">
          Converting a Laravel Inertia App from Mix to Vite
        </h2>
        <p className="my-2">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <div className="flex justify-between">
          <a className="btn">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

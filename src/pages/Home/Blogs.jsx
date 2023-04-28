import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p className="text-xl mt-2">My Thoughts On Different Things</p>
      </div>
      <div className="grid md:grid-cols-3 place-items-center gap-8 mt-8 px-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;

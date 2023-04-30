import React from "react";
import BlogCard from "../Home/BlogCard";

const Blogs = () => {
  return (
    <div className="mt-5 md:mt-10 px-5">
      <h1 className="text-4xl font-hand underline mb-5">Blogs</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8"
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;

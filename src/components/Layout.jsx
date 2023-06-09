import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bgD">
      <div className="navbar bg-base-10 border-b md:px-5 lg:px-28">
        <div className="flex-1">
          <Link
            to={"/"}
            className="normal-case font-hand text-sky-500 text-3xl md:text-3xl lg:text-4xl"
          >
            &lt;Munim Rahman/&gt;
          </Link>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link
            to="https://drive.google.com/file/d/1J-lFWNe8CtoiqLPeqlj-FKRMgKRC-xEG/view"
            target="_blank"
            className="btn"
          >
            Get Resume
          </Link>
        </div>
      </div>
      <div className="max-w-[1115px] mx-auto pb-16 md:pb-0">
        <Outlet />
      </div>
      <Footer />
      <div className="fixed bottom-0 w-full md:hidden">
        <ul className="flex justify-around items-end bg-sky-500">
          <li className="my-2">
            <Link to={"/"}>
              <i className="fas fa-home text-xl text-white"></i>
            </Link>
          </li>
          <li className="my-2">
            <Link to={"/about"}>
              <i className="fas fa-user text-xl text-white"></i>
            </Link>
          </li>
          <li className="my-2">
            <Link to={"/projects"}>
              <i className="fas fa-briefcase text-xl text-white"></i>
            </Link>
          </li>
          <li className="my-2">
            <Link to={"/blogs"}>
              <i className="fas fa-blog text-xl text-white"></i>
            </Link>
          </li>
          <li className="my-2">
            <Link to={"/contact"}>
              <i className="fas fa-comment-dots text-xl text-white"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;

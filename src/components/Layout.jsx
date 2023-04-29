import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bgD">
      <div className="navbar bg-base-10 border-b sm:px-10 md:px-28">
        <div className="flex-1">
          <Link to={"/"} className="normal-case text-xl">
            Munim Rahman
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
          <Link className="btn">Get Resume</Link>
        </div>
      </div>
      <div className="max-w-[1115px] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <div className="fixed bottom-0 w-full md:hidden">
        <ul className="flex justify-around items-end bg-red-200">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;

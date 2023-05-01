import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hidden md:block max-w-[1115px] mx-auto pb-5 md:pb-0">
      <div className="divider mb-0"></div>
      <p className="text-sm text-center text-primary py-5 px-2">
        Designed and built by{" "}
        <Link
          to={"https://web.facebook.com/munimrh/"}
          target="_black"
          className="text-sky-500"
        >
          Munim Rahman
        </Link>{" "}
        with <span className="text-red-400">Love</span> &{" "}
        <span className="text-[#6F4E37]">Coffee</span>
      </p>
    </div>
  );
};

export default Footer;

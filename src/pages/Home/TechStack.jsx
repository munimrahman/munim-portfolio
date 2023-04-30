import React from "react";
import html from "../../assets/image/vscode-icons_file-type-html.png";
import css from "../../assets/image/vscode-icons_file-type-css.png";
import js from "../../assets/image/vscode-icons_file-type-js-official.png";
import react from "../../assets/image/logos_react.png";
import redux from "../../assets/image/Vector.png";
import bootstrap from "../../assets/image/logos_bootstrap.png";
import tailwind from "../../assets/image/vscode-icons_file-type-tailwind.png";
import git from "../../assets/image/logos_git-icon.png";
import vscode from "../../assets/image/vscode-icons_file-type-vscode.png";
import node from "../../assets/image/node.png";
import express from "../../assets/image/express.png";
import mongodb from "../../assets/image/mongodb.png";

const TechStack = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#42446E]">My Tech Stack</h1>
        <p className="text-lg md:text-xl font-light text-gray-500">
          Technologies I’ve been working with recently
        </p>
      </div>
      <div className="grid grid-cols-12 place-items-center gap-y-8 mt-8">
        <div className="col-span-3 md:col-span-2">
          <img src={html} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={css} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={bootstrap} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={tailwind} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={js} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={react} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={redux} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={node} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img
            src={express}
            className="w-14 h-14 md:w-16 md:h-16 rounded-lg"
            alt=""
          />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={mongodb} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={git} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <img src={vscode} className="w-14 h-14 md:w-16 md:h-16" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;

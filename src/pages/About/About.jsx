import React from "react";
import man from "../../assets/image/man.png";
import sig from "../../assets/image/sig.png";

const About = () => {
  return (
    <div className="mt-5 md:mt-16 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center place-items-center">
        <figure className="md:col-span-4 max-w-[360px]">
          <img src={man} className="w-full rounded-2xl" alt="" />
        </figure>
        <div className="md:col-span-8 mt-5 md:mt-0 px- md:px-10">
          <p className="text-lg font-bold">Nice to meet you,</p>
          <h2 className="text-2xl font-bold text-primary my-2">
            I'm Munim Rahman
          </h2>
          <p>
            Working full time in Angular, Typescript and SCSS, leading the team
            for revamping DotCMS administration system.
          </p>
          <p className="my-2 text-primary text-lg">
            Code, Design, Learn and Teach.
          </p>
          <p>
            Frontend is my true passion and I really enjoy the whole process of
            creating UIs, from the first brainstorming, wireframes, mockups,
            design, all the way until the final product.
          </p>
          <img src={sig} className="mt-2" alt="" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-3 text-3xl">My Skills</h2>
        <div className="flex flex-wrap gap-2">
          <p className="bg-slate-700 text-white text-lg px-4 py-1">HTML</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">CSS</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Tailwind</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Bootstrap</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">
            JavaScript
          </p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">React</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Redux</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Node</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Express</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">MongoDB</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Mongoose</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">JWT</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">REST API</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">Firebase</p>
          <p className="bg-slate-700 text-white text-lg px-4 py-1">
            Git & Github
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

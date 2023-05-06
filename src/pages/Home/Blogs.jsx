import React from "react";
import ReactTag from "../../components/Tags/ReactTag";
import ReduxTag from "../../components/Tags/ReduxTag";
import JavaScriptTag from "../../components/Tags/JavaScriptTag";
import jsWeird from "../../assets/image/weird_js.png";
import reducer from "../../assets/image/useReducer.png";
import var_let from "../../assets/image/let_var_const_munimrahman.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-bold">Latest Blogs</h1>
        <p className="text-xl text-gray-500 font-light mt-2">
          My Thoughts On Different Things
        </p>
      </div>
      <div className="grid md:grid-cols-3 place-items-center gap-8 mt-8 px-5">
        {/* blog one */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <div className="card bg-base-100 shadow-xl">
            <figure className="">
              <img src={jsWeird} className="w-full" alt="" />
            </figure>
            <div className="p-5">
              <div className="flex flex-wrap gap-x-1 pb-3">
                <JavaScriptTag />
              </div>
              <h2 className="text-lg text-primary font-bold">
                <Link
                  to="https://medium.com/@munimrahman/is-javascript-weird-or-smart-5-things-to-be-aware-of-4b1b4d6145d7"
                  target="_blank"
                >
                  Is JavaScript Weird or Smart? 5 Things To Be Aware Of
                </Link>
              </h2>
              <p className="my-2 text-gray-700">
                JavaScript, being a versatile programming language, has its fair
                share of quirky and unexpected behaviors...
              </p>
              <div className="flex justify-between">
                <Link
                  to="https://medium.com/@munimrahman/is-javascript-weird-or-smart-5-things-to-be-aware-of-4b1b4d6145d7"
                  target="_blank"
                  className="btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* blog two */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="">
            <img src={reducer} className="w-full" alt="" />
          </figure>
          <div className="p-5">
            <div className="flex flex-wrap gap-x-1 pb-3">
              <JavaScriptTag />
              <ReactTag />
              <ReduxTag />
            </div>
            <h2 className="text-lg text-primary font-bold">
              <Link
                to="https://medium.com/@munimrahman/state-management-in-react-with-the-usereducer-hook-b66fe83526af"
                target="_blank"
              >
                State Management in React with the useReducer Hook
              </Link>
            </h2>
            <p className="my-2 text-gray-700">
              As React applications grow in complexity, managing state becomes
              more challenging. To address this, React provides...
            </p>
            <div className="flex justify-between">
              <Link
                to="https://medium.com/@munimrahman/state-management-in-react-with-the-usereducer-hook-b66fe83526af"
                target="_blank"
                className="btn"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* blog three */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <div className="card bg-base-100 shadow-xl">
            <figure className="">
              <img src={var_let} className="w-full" alt="" />
            </figure>
            <div className="p-5">
              <div className="flex flex-wrap gap-x-1 pb-3">
                <JavaScriptTag />
              </div>
              <h2 className="text-lg text-primary font-bold">
                <Link
                  to="https://medium.com/@munimrahman/difference-between-var-let-const-551386c238a"
                  target="_blank"
                >
                  Difference between var, let & const
                </Link>
              </h2>
              <p className="my-2 text-gray-700">
                In JavaScript, we use the keywords “var”, “let”, and “const” to
                declare variables. Before introducing ES6, developers only...
              </p>
              <div className="flex justify-between">
                <Link
                  to="https://medium.com/@munimrahman/difference-between-var-let-const-551386c238a"
                  target="_blank"
                  className="btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

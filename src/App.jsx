import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="font-roboto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

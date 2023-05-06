import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";
import LatestProjects from "./LatestProjects";
import Blogs from "./Blogs";
import ContactSection from "./ContactSection";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Munim Rahman");
  return (
    <>
      <Hero />
      <TechStack />
      <LatestProjects />
      <Blogs />
      <ContactSection />
    </>
  );
};

export default Home;

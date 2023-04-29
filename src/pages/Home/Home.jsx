import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";
import LatestProjects from "./LatestProjects";
import Blogs from "./Blogs";
import ContactSection from "./ContactSection";

const Home = () => {
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

import HeroSection from "@/components/herosection";
import About from "@/components/about";
import Services from "@/components/services";
import Team from "@/components/Team";
import Blog from '@/components/blog';
import React from "react";

const page = () => {
  return <>
    <HeroSection />
    <About />
    <Services />
    <Team />
    <Blog />

  </>;
};

export default page;

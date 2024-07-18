// pages/index.tsx
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import ParticleBackground from "./components/ParticleBackground";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <NavBar openNav={openNav} />
        <ParticleBackground>
          <Hero />
          <About />
        </ParticleBackground>
      </div>
    </div>
  );
};

export default HomePage;

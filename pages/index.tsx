import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

const HomePage: React.FC = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <NavBar openNav={openNav} />
        <ParticleBackground>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </ParticleBackground>
      </div>
    </div>
  );
};

export default HomePage;

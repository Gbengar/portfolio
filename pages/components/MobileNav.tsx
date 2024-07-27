import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          Contact
        </ScrollLink>
        <a
          href="/GbengaCV.pdf"
          className="nav-link-mobile cursor-pointer"
          onClick={closeNav}
        >
          Resume
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

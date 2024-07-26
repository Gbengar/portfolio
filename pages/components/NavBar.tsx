import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";

interface Props {
  openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-black">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[20px] text-white font-normal">
          &lt;Gbenga <span className="text-red-600">Oshagbemi</span>/ &gt;
        </h1>
        <div className="flex space-x-4 ml-auto">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="resume"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Resume
          </ScrollLink>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

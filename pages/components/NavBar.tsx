import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

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
          <div className="nav-link">Home</div>
          <div className="nav-link">About Me</div>
          <div className="nav-link">Service</div>
          <div className="nav-link">Projects</div>
          <div className="nav-link">Contact</div>
          <div className="nav-link">Resume</div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

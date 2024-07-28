import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  openNav: () => void;
  activeSection: string;
}

const NavBar: React.FC<Props> = ({ openNav, activeSection }) => {
  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-black">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[20px] text-white font-normal">
          &lt;Gbenga <span className="text-red-600">Oshagbemi</span>/ &gt;
        </h1>
        <div className="flex space-x-4 ml-auto">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className={`nav-link cursor-pointer ${
                activeSection === link.to
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-white"
              }`}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

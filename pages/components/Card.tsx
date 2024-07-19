// components/Card.tsx
import React from "react";
import { IconType } from "react-icons";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Link {
  href: string;
  Icon: IconType;
}

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  links: Link[];
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <div className="backdrop-blur-lg bg-white/30 rounded-lg	  transform transition-all duration-300    p-3	">
      <div className="flex justify-between items-center mb-2">
        <FaFolder className="text-green-500 text-2xl" />
        <div className="flex space-x-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer"
            >
              <link.Icon />
            </a>
          ))}
        </div>
      </div>
      <h3 className="text-sm font-bold mb-2">{title} </h3>
      <p className="text-gray-400 mb-4 text-sm	">{description}</p>
      <div className="flex space-x-2 text-gray-500">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

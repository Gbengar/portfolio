// components/Card.tsx
import React, { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FolderIcon from "./svg/FolderIcon";

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
  const animatedElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    animatedElementsRef.current =
      document.querySelectorAll(".projects-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__flipInX");
          } else {
            entry.target.classList.remove(
              "animate__animated",
              "animate__flipInX"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElementsRef.current.forEach((el) => observer.observe(el));
    return () => {
      if (animatedElementsRef.current) {
        animatedElementsRef.current.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  return (
    <div className="projects-animate backdrop-blur-lg bg-black rounded-lg hover:bg-[#E31F71]  transform transition-all duration-300    p-3	">
      <div className="flex justify-between items-center mb-2">
        <FolderIcon />
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
      <h3 className="text-base	pb-3 font-bold mb-2 text-white">{title} </h3>
      <p className="text-white mb-4 text-sm	">{description}</p>
      <div className="flex space-x-2 text-gray-500">
        {technologies.map((tech, index) => (
          <span key={index} className=" px-2 py-1  text-xs	">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

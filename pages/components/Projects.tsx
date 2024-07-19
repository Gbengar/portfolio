import React from "react";
import Card from "./Card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "School: Website for Elect High School",
    description:
      "Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.",
    technologies: ["React", "Tailwind", "MongoDB"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: FaGithub },
      {
        href: "https://electintellectualschool.vercel.app/",
        Icon: FaExternalLinkAlt,
      },
    ],
  },
  // Add more project objects here
];

const Projects = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-red-700">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects.map((project, index) => (
          <div key={index}>
            <Card
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
            s
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

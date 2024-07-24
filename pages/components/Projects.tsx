import React from "react";
import Card from "./Card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GIthubIcon from "./svg/GIthubIcon";
import LinkIcon from "./svg/LinkIcon";

const projects = [
  {
    title: "School: Website for Elect High School",
    description:
      "Developed a high school website using React, Tailwind CSS, and MongoDB, providing a dynamic user experience, responsive design, and efficient data management. The platform includes secure role-based access control and CRUD functionality for managing student records and schedules.",
    technologies: ["React", "Tailwind", "MongoDB"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://electintellectualschool.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "School: Website for Elect High School",
    description:
      "I developed a MERN Fitness company store, similar to Amazon, but focused on gym equipment. Users can register, purchase, and schedule equipment, with features like customer reviews and discounts. The store offers a wide selection of exercise and fitness products, with a holistic fitness experience through scheduled appointments with trainers or fitness professionals.",
    technologies: ["Vite", "Typescript", "MERN", "Machine Learning", "Rechart"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://prediction-app-frontend.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "Fitness Store: Website for Endurance Athletics",
    description:
      "I built a MERN Fitness company store, The store also serves as an amazzon like company that deals with gym equipment, users register and can buy and schedule .",
    technologies: ["Vite", "Typescript", "MERN", "Machine Learning", "Rechart"],
    links: [
      { href: "https://github.com/Gbengar/Fitness-App", Icon: GIthubIcon },
      {
        href: "https://fitness-app-frontend-virid.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "Storybook App: Post and View User Stories",
    description:
      "I developed a Storybook App where users can post stories, and other users can view them. This app leverages the MERN (MongoDB, Express.js, React, Node.js) stack to create an efficient and scalable platform.",
    technologies: [
      "express-handlebars",
      "passport",
      "google-oauth20",
      "morgan",
    ],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://prediction-app-frontend.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "School: Website for Elect High School",
    description:
      "I built a MERN Finance Dashboard App that incorporates Machine Learning Predictions. The frontend, i used Vite as my starter app, Redux Toolkit for state management, Material UI for component library, and Recharts for creating interactive charts. On the backend, I've chosen Node.js as my runtime.",
    technologies: ["Vite", "Typescript", "MERN", "Machine Learning", "Rechart"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://prediction-app-frontend.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "School: Website for Elect High School",
    description:
      "I built a MERN Finance Dashboard App that incorporates Machine Learning Predictions. The frontend, i used Vite as my starter app, Redux Toolkit for state management, Material UI for component library, and Recharts for creating interactive charts. On the backend, I've chosen Node.js as my runtime.",
    technologies: ["Vite", "Typescript", "MERN", "Machine Learning", "Rechart"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://prediction-app-frontend.vercel.app/",
        Icon: LinkIcon,
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

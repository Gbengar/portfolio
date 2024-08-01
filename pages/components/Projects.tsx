import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GIthubIcon from "./svg/GIthubIcon";
import LinkIcon from "./svg/LinkIcon";
import classes from "./Hero.module.scss"; // Assuming you have a CSS module for Services

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
      "I developed a MERN Fitness store for gym equipment, offering user registration, purchases, scheduling, customer reviews, and discounts. The store features a wide selection of fitness products and allows scheduling appointments with trainers for a holistic fitness experience.",
    technologies: ["react-redux", "MERN", "timeago.js"],

    links: [
      { href: "https://github.com/Gbengar/Fitness-App", Icon: GIthubIcon },
      {
        href: "https://fitness-app-frontend-virid.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "MERN Finance Dashboard App",
    description:
      "I built a MERN Finance Dashboard App with Machine Learning predictions. The frontend uses Vite, Redux Toolkit, Material UI, and Recharts for charts. The backend uses Node.js, Express.js, and MongoDB. This setup ensures efficient state management, interactive visuals, and robust server performance.",
    technologies: ["Typescript", "Machine Learning", "Rechart"],
    links: [
      { href: "https://github.com/Gbengar/school", Icon: GIthubIcon },
      {
        href: "https://prediction-app-frontend.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },
  {
    title: "Storybook App: Post and View User Stories",
    description:
      "I developed a Storybook App where users can post stories, and other users can view them. This app leverages the MERN (MongoDB, Express.js, React, Node.js) stack to create an efficient and scalable platform.",
    technologies: ["express-handlebars", "passport", "google-oauth20"],
    links: [
      {
        href: "https://github.com/Gbengar/travesty_CRUD_DEMO",
        Icon: GIthubIcon,
      },
      {
        href: "https://storybook-demo.onrender.com/",
        Icon: LinkIcon,
      },
    ],
  },

  {
    title: "Applaza: Event scheduling app",
    description:
      "I built a MERN business application where users can register, log in, and manage event scheduling. It features calendar integration for holidays of all countries, meeting scheduling, and recurring events for over 10 years. Users can add events with others if they follow each other.",
    technologies: ["MERN", "rc-rate", "react-redux", "timeago.js"],
    links: [
      {
        href: "https://github.com/Gbengar/backup-main-project",
        Icon: GIthubIcon,
      },
      {
        href: "https://backup-main-project-frontend.vercel.app/",
        Icon: LinkIcon,
      },
    ],
  },

  // Add more project objects here
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setAnimateContent(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-red-700">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects?.map((project, index) => (
          <div
            key={index}
            className={`${
              animateContent
                ? `${classes.visible} animate__animated animate__flipInX`
                : classes.invisible
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
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

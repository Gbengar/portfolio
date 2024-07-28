import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import { CommandLineIcon } from "@heroicons/react/20/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef } from "react";

const Services = () => {
  const animatedElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__jackInTheBox"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      animatedElementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const services = [
    {
      icon: (
        <CodeBracketSquareIcon className="w-[3rem] h-[3rem] mx-auto text-[#d3fae8]" />
      ),
      title: "Frontend",
      description:
        "I build user interfaces for web applications using frameworks like React, Vue, or Angular. I create responsive designs, implement user interactions, and integrate with APIs using JavaScript, CSS, and modern build tools.",
    },
    {
      icon: (
        <CommandLineIcon className="w-[3rem] h-[3rem] mx-auto text-[#d3fae8]" />
      ),
      title: "Backend",
      description:
        "Backend development involves creating server-side logic, managing databases, and building APIs to power web applications, while ensuring data security, optimizing system performance, implementing business logic, and integrating various services and technologies.",
    },
    {
      icon: (
        <RocketLaunchIcon className="w-[3rem] h-[3rem] mx-auto text-[#d3fae8]" />
      ),
      title: "Fullstack",
      description:
        "Full-stack development combines frontend and backend skills to build complete web applications, handling everything from user interfaces and client-side logic to server-side programming, databases, APIs, and system architecture.",
    },
  ];

  return (
    <div className="min-h-[88vh] pt-[4rem] md:pt-[8rem] pb-[2rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (animatedElementsRef.current[index] = el)}
            className="backdrop-blur-sm bg-white/30 rounded-lg hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]"
          >
            {service.icon}
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              {service.title}
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Hero.module.scss";

const About = () => {
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
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAnimationClass = (direction: "Left" | "Right") => {
    return animateContent
      ? `${classes.visible} animate__animated animate__fadeIn${direction}`
      : classes.invisible;
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-[88vh] pb-[3rem] pt-[10rem] md:pt-[8rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#2a2cb4] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Dynamic <span className="text-red-600">Thinker</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p
              className={`text-[19px] text-slate-300 w-[80%] ${getAnimationClass(
                "Left"
              )}`}
            >
              I am a trained banker turned engineer, driven by the potential of
              IT to enhance financial services, particularly in developing
              countries with limited internet access. <br /> <br />
              With a deep understanding of advancements over the past two
              decades, I aim to make a meaningful impact on the industry and
              leave a lasting legacy.
            </p>
          </div>
        </div>
        <div
          className={`lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[300px] h-[300px] relative ${getAnimationClass(
            "Right"
          )}`}
        >
          <Image
            src="/images/unnamed.jpg"
            alt="user"
            fill
            style={{ objectFit: "contain" }}
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[80%] h-[100%] z-[10] bg-[white] top-[-1rem] right-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Hero.module.scss"; // Assume you have a CSS module for About

const About = () => {
  const animatedElementsRef = useRef<NodeListOf<Element> | null>(null);
  const animatedParagraphRef = useRef<HTMLParagraphElement>(null);
  const animatedImageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    animatedElementsRef.current = document.querySelectorAll(".about-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animatedParagraphRef.current) {
      observer.observe(animatedParagraphRef.current);
    }
    if (animatedImageRef.current) {
      observer.observe(animatedImageRef.current);
    }

    return () => {
      if (animatedParagraphRef.current) {
        observer.unobserve(animatedParagraphRef.current);
      }
      if (animatedImageRef.current) {
        observer.unobserve(animatedImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      if (animatedParagraphRef.current) {
        animatedParagraphRef.current.classList.remove(
          classes.invisible,
          "animate__animated",
          "animate__fadeInLeft"
        );
        void animatedParagraphRef.current.offsetWidth; // Trigger reflow
        animatedParagraphRef.current.classList.add(
          classes.visible,
          "animate__animated",
          "animate__fadeInLeft"
        );
      }
      if (animatedImageRef.current) {
        animatedImageRef.current.classList.remove(
          classes.invisible,
          "animate__animated",
          "animate__fadeInRight"
        );
        void animatedImageRef.current.offsetWidth; // Trigger reflow
        animatedImageRef.current.classList.add(
          classes.visible,
          "animate__animated",
          "animate__fadeInRight"
        );
      }
    } else {
      if (animatedParagraphRef.current) {
        animatedParagraphRef.current.classList.remove(
          classes.visible,
          "animate__animated",
          "animate__fadeInLeft"
        );
        animatedParagraphRef.current.classList.add(classes.invisible);
      }
      if (animatedImageRef.current) {
        animatedImageRef.current.classList.remove(
          classes.visible,
          "animate__animated",
          "animate__fadeInRight"
        );
        animatedImageRef.current.classList.add(classes.invisible);
      }
    }
  }, [isVisible]);

  return (
    <div className="min-h-[88vh] pb-[3rem] pt-[10rem] md:pt-[8rem]">
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
              ref={animatedParagraphRef}
              className={`text-[19px] text-slate-300 w-[80%] ${classes.invisible}`}
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
          ref={animatedImageRef}
          className={`lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[300px] h-[300px] relative ${classes.invisible}`}
        >
          <Image
            src="/images/unnamed.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[80%] h-[100%] z-[10] bg-[white] top-[-1rem] right-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

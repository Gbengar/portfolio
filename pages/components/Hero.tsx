/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import classes from "./Hero.module.scss";

const Hero = () => {
  const animatedImageRef = useRef<HTMLDivElement>(null);
  const animatedSocialIconRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (animatedImageRef.current) {
      observer.observe(animatedImageRef.current);
    }
    if (animatedSocialIconRef.current) {
      observer.observe(animatedSocialIconRef.current);
    }

    return () => {
      if (animatedImageRef.current) {
        observer.unobserve(animatedImageRef.current);
      }
      if (animatedSocialIconRef.current) {
        observer.unobserve(animatedSocialIconRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      if (animatedImageRef.current) {
        animatedImageRef.current.classList.remove(
          classes.invisible,
          "animate__animated",
          "animate__bounceIn"
        );
        void animatedImageRef.current.offsetWidth; // Trigger reflow
        animatedImageRef.current.classList.add(
          classes.visible,
          "animate__animated",
          "animate__bounceIn"
        );
      }
      if (animatedSocialIconRef.current) {
        animatedSocialIconRef.current.classList.remove(
          classes.invisible,
          "animate__animated",
          "animate__fadeInDown"
        );
        void animatedSocialIconRef.current.offsetWidth; // Trigger reflow
        animatedSocialIconRef.current.classList.add(
          classes.visible,
          "animate__animated",
          "animate__fadeInDown"
        );
      }
    } else {
      if (animatedImageRef.current) {
        animatedImageRef.current.classList.remove(
          classes.visible,
          "animate__animated",
          "animate__bounceIn"
        );
        animatedImageRef.current.classList.add(classes.invisible);
      }
      if (animatedSocialIconRef.current) {
        animatedSocialIconRef.current.classList.remove(
          classes.visible,
          "animate__animated",
          "animate__fadeInDown"
        );
        animatedSocialIconRef.current.classList.add(classes.invisible);
      }
    }
  }, [isVisible]);

  return (
    <div className="flex items-center pt-[5rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        <div>
          <span className="text-[15px] text-white"> Hi There, I'm </span>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            <span className="text-red-700">GBENGA!</span>
          </h1>
          <TextEffect />
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <a href="/GbengaCV.pdf"> My Resume</a>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <div className="space-y-4 mt-4">
              <div
                ref={animatedSocialIconRef}
                className={`space-x-4 ${classes.invisible}`}
              >
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={animatedImageRef}
          className={`w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] ${classes.invisible}`}
          style={{ position: "relative" }}
        >
          <Image
            key="hero-image"
            src={"/images/100953616.jpeg"}
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

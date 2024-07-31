import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import classes from "./Hero.module.scss";

const Hero = () => {
  const openResume = () => {
    window.open("/GbengaCV.pdf", "_blank");
  };

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
            <button
              onClick={openResume}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              My Resume
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <div className="space-y-4 mt-4">
              <div
                className={`space-x-4 ${classes.visible} animate__animated animate__fadeInDown`}
              >
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] ${classes.visible} animate__animated animate__bounceIn`}
          style={{ position: "relative" }}
        >
          <Image
            key="hero-image"
            src={"/images/100953616.jpeg"}
            alt="user"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

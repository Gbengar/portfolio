import React from "react";
import Particle from "./Particules";
import TextEffect from "./TextEffect";
import Image from "next/image";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  return (
    <div className="relative h-[88vh] bg-black bg-cover bg-center">
      <Particle />
      <div className="relative w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-[100%] items-center z-10">
        <div>
          <span className="text-[15px] text-white"> Hi There, I'm </span>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            <span className="text-red-700">GBENGA!</span>
          </h1>
          <TextEffect />
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0  sm:space-x-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50">
              Contact
            </button>
            <div className="space-y-4 mt-4">
              <div className="space-x-4">
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/100953616.jpeg"
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

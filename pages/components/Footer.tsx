import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <div className="pt-[1rem] pb-[1rem] bg-[#02050a]">
      <div className="w-[80%] mt-[2rem] mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-[18px] text-white opacity-20">
          Oshagbemi Gbenga 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white opacity-20">Terms Condition</p>
          <p className="text-[18px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[18px] text-white opacity-20">Sitemap</p>
        </div>
        <div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;

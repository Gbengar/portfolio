import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[2rem] bg-[#02050a]">
      <div></div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          Oshagbemi Gbenga 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white opacity-20">Terms Condition</p>
          <p className="text-[18px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[18px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

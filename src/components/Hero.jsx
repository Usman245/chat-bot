import React from "react";

const Hero = () => {
  return (
    <div className="flex flel-col">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="text-white w-full mx-auto absolute top-1/3 ">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="mb-3 h-[72px] w-[72px] ">
              <div className="relative flex  h-full items-center justify-center rounded-full  bg-gradient-to-b from-purple-600 to-red-500 text-black  text-4xl font-secondary font-bold">
                <p className="text-white">K</p>
                <p className="text-white">L</p>
              </div>
            </div>
            <p className="text-[18px] md:text-[24px] font-semibold text-[#c8c8c8]  md:in-w-[300px]">
              How can I help you today?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="flex flel-col">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="text-white w-full mx-auto absolute top-1/3 ">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="mb-3 h-[72px] w-[72px]">
              <div className="relative flex  h-full items-center justify-center rounded-full  bg-white text-black ">
                <p className="text-purple-600">Chat</p>
                <p>Bot</p>
              </div>
            </div>
            <p className="text-[18px] md:text-[24px] font-semibold text-[#c8c8c8]  md:in-w-[300px]">
              How can I help you today?
            </p>
            <div className="relative rounded-full py-1 px-3 text-[14px] md:text-sm leading-6 min-w-[240px] md:min-w-[224px] text-[#b9b5b5] ring-1 ring-white-900/10 hover:ring-white-900/40">
              <span>The next generation of elearning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

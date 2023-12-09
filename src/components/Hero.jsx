import React from "react";

const Hero = () => {
  return (
    <div className=" h-[60vh] flex flex-col justify-center items-center text-center">
      <div className=" w-24 h-24 rounded-full bg-white text-center text-xl flex justify-center items-center">
        <span className="text-black">Chat</span>
        <span className="text-blue-600">bot</span>
      </div>
      <h3 className=" mt-4 text-2xl text-white">How can i help you today?</h3>
    </div>
  );
};

export default Hero;

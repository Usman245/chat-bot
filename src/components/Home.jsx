import React from "react";
import Form from "./Form";
import { useMyContext } from "./Provider";
import Hero from "./Hero";
import Chat from "./Chat";

const Home = () => {
  const { isUserInteract } = useMyContext();
  return (
    <div className=" min-h-screen">
      <div className=" fixed top-0 bg-gray-900 w-full text-center z-10">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center pb-3 pt-6 font-bold text-2xl md:text-6xl">
          Kwan Lengu
        </h1>
      </div>
      {isUserInteract ? <Chat /> : <Hero />}
      <Form />
    </div>
  );
};

export default Home;

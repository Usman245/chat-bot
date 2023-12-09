import React from "react";
import Form from "./Form";
import { useMyContext } from "./Provider";
import Hero from "./Hero";
import Chat from "./Chat";

const Home = () => {
  const { isUserInteract } = useMyContext();
  return (
    <div>
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center pb-3 pt-6 font-bold text-4xl md:text-6xl">
        Kwan Lengu AI Assistant
      </h1>
      <h1 className=" text-2xl text-white">Gmail: um337757@gmail.com</h1>
      {isUserInteract ? <Chat /> : <Hero />}
      <Form />
    </div>
  );
};

export default Home;

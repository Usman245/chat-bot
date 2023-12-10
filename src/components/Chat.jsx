import React, { useEffect, useState } from "react";
import { useMyContext } from "./Provider";
import dot from "../images/dot.gif";

const TypingEffect = ({ text }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const simulateTypingEffect = async () => {
      const typingEffectDelay = 5; // Adjust the typing effect delay as needed

      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingEffectDelay));
        setTypedText(text.slice(0, i + 1));
      }
    };

    simulateTypingEffect();
  }, [text]);

  return <div className="flex-wrap h-auto text-white">{typedText}</div>;
};

const Chat = () => {
  const { chatLog, isResponseLoad } = useMyContext();

  return (
    <div className="flex flex-grow p-6 pt-10 overflow-y-auto custom-scrollbar bg-gray-700">
      <div className="flex flex-col mt-10 mb-20 w-[96%]">
        {chatLog.map((item, index) => (
          <div
            key={index}
            className={
              item.type === "user"
                ? "flex ml-auto items-end justify-end text-[16px] rounded-md md:text-[16px] bg-purple-500 px-4 py-2 flex-wrap my-4"
                : "flex justify-start p-2 rounded-md text-[12px] md:text-[16px] flex-wrap bg-gray-600"
            }
            style={{ width: "fit-content" }}
          >
            {item.type === "user" ? (
              <div className="flex-wrap h-auto text-white">{item.text}</div>
            ) : (
              <TypingEffect text={item.text} />
            )}
          </div>
        ))}
        {isResponseLoad ? (
          <img
            src={dot}
            alt="dot"
            className="rounded-full w-[70px] h-[70px] object-cover"
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Chat;

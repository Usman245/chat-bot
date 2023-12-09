import React from "react";
import { useMyContext } from "./Provider";
import dot from "../images/dot.gif";
const Chat = () => {
  const { chatLog, isResponseLoad } = useMyContext();
  return (
    <div className=" flex flex-grow p-6 pt-10  overflow-y-auto custom-scrollbar bg-gray-800">
      <div className="flex flex-col mt-10 mb-20 w-[96%]">
        {/* Display user inputs and API responses interleaved */}
        {chatLog.map((item, index) => (
          <div
            key={index}
            className={
              item.type === "user"
                ? "flex ml-auto items-end justify-end h-auto text-[16px] rounded-md md:text-[16px] text-white bg-purple-500 w-max px-4 py-2  flex-wrap my-4"
                : "flex justify-start p-2 rounded-md h-auto  text-[12px] md:text-[16px] text-white  flex-wrap bg-gray-600"
            }
          >
            <div className="flex-wrap">{item.text}</div>
          </div>
        ))}
        {isResponseLoad ? (
          <img
            src={dot}
            alt="dot"
            className="rounded-full w-[70px] h-[70px] object-cover "
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Chat;

import React from "react";
import { useMyContext } from "./Provider";
import dot from "../images/dot.gif";
const Chat = () => {
  const { userInput, chatLog, isResponseLoad } = useMyContext();
  return (
    <div>
      <div className="flex-grow p-6 pt-10  overflow-y-auto custom-scrollbar">
        <div className="flex flex-col space-y-4 ">
          <div>
            {/* Display chat log */}
            {chatLog.map((prompt, index) => (
              <div class="flex justify-end h-auto text-[12px] md:text-[16px]  flex-wrap">
                <div class="bg-purple-500 flex-wrap rounded-lg p-4 text-white h-auto ">
                  {prompt}
                </div>
              </div>
            ))}
          </div>
          {isResponseLoad ? (
            <img src={dot} className=" w-[300px] h-[70px]" alt="gif" />
          ) : (
            "not load"
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;

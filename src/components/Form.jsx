import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useMyContext } from "./Provider";

const Form = () => {
  //microphone
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const {
    userInput,
    setUserInput,
    setUserInteract,
    setChatLog,
    setResponseLoad,
  } = useMyContext("");
  useEffect(() => {
    // Update inputValue when transcript changes
    setUserInput(transcript);
  }, [transcript]);

  function handleStart() {
    SpeechRecognition.startListening({ onEnd: handleStopRecording });
  }
  const handleStopRecording = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = async (e) => {
    setUserInteract(true);
    const userMessage = { type: "user", text: userInput };
    setChatLog((prevConversations) => [...prevConversations, userMessage]);
    setResponseLoad(true);
    try {
      const response = await fetch("https://www.chatbase.co/api/v1/chat", {
        method: "POST",
        headers: {
          Authorization: "Bearer 272f571d-4481-4c88-a100-1368bf7a7443",
        },
        body: JSON.stringify({
          messages: [{ content: userInput, role: "user" }],
          chatbotId: "hn8S7aaqSd8_slDFjFZZS",
          stream: false,
          model: "gpt-3.5-turbo",
          temperature: 0,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw Error(errorData.message);
      }
      const data = await response.json();

      // Handle sending the input value (whether typed or recorded) to the chatbot API
      const apiResponse = { type: "api", text: data.text };

      // Add API response to the conversations array
      setChatLog((prevConversations) => [...prevConversations, apiResponse]);
      setResponseLoad(false);
    } catch (err) {}
    setUserInput("");
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSubmit();
    }
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="w-full fixed bottom-0 bg-gray-900">
      <div className="w-[90%] ml-4 flex items-center  justify-center pb-4">
        <form className="flex-none pt-2 pb-3 px-6 mobile:px-2 md:w-[700px] w-[100%] md:max-w-[700px] ">
          <div className="flex rounded-[20px] border border-gray-700 bg-gray-800 ">
            <input
              type="text"
              className="flex-grow pl-4 py-[14px] bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {listening ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white mt-2 mr-2"
                onClick={SpeechRecognition.stopListening}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 text-center text-white justify-center h-8 mobile:w-6 mobile:h-6 mobile:mt-[12px] mt-2 mr-2"
                onClick={handleStart}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            )}
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className=" bg-transparent rounded-[20px] px-2 py-2 mobile:px-1 mobile:py-1 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mobile:w-6 mobile:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Form;

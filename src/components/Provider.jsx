import { createContext, useState, useContext } from "react";

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [isUserInteract, setUserInteract] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [response, setResponse] = useState([]);
  const [isResponseLoad, setResponseLoad] = useState(false);

  return (
    <MyContext.Provider
      value={{
        userInput,
        setUserInput,
        isUserInteract,
        setUserInteract,
        chatLog,
        setChatLog,
        response,
        setResponse,
        isResponseLoad,
        setResponseLoad,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}

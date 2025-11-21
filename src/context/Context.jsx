// GlobalContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create the context
const GlobalContext = createContext();

// Create the provider
export const GlobalProvider = ({ children }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleFormVisible = () => {
    setFormVisible((p) => !p);
  };
  const context = {
    formVisible,
    toggleFormVisible,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

// Custom hook to use global state
export const useGlobalState = () => {
  return useContext(GlobalContext);
};

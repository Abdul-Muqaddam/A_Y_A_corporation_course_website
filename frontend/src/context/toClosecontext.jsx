import React, { createContext, useState } from "react";

const ToCloseContext=createContext()

const ToCloseProvider = ({ children }) => {
  const [isfreelessonPreview, setIsfreelessonPreview]=useState(false)
  
  return (
    <ToCloseContext.Provider value={{isfreelessonPreview, setIsfreelessonPreview}}>
      {children}
    </ToCloseContext.Provider>
  );
};

export {ToCloseProvider,ToCloseContext}
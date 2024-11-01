import React, { createContext, useState } from "react";

export const SavedContext = createContext();

function SavedProvider({ children }) {
  const [ saved, setSaved] = useState([]);
  console.log(saved);

  function addSaved(product) {
    if(saved.some(item => item.id === product.id)){
      setSaved(saved.filter(item => item.id !== product.id))
    }else{
      setSaved([...saved, product])
    }
  }
  return (
    <SavedContext.Provider value={{ saved, addSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export default SavedProvider;

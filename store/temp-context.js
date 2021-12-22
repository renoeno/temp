import React, { useState } from "react";

export const TempContext = React.createContext({
  language: "",
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
  switchLanguage: (language) => {},
});

const TempContextProvider = (props) => {
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  const switchLanguageHandler = (language) => {
    setLanguage(language);
  };

  const startLoadingHandler = () => {
    setIsLoading(true);
    console.log("carregando");
  };

  const stopLoadingHandler = () => {
    setIsLoading(false);
    console.log("carregou");
  };

  const contextValue = {
    language: language,
    isLoading: isLoading,
    startLoading: startLoadingHandler,
    stopLoading: stopLoadingHandler,
    switchLanguage: switchLanguageHandler,
  };

  return (
    <TempContext.Provider value={contextValue}>
      {props.children}
    </TempContext.Provider>
  );
};

export default TempContextProvider;

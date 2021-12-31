import React, { useState } from "react";

export const TempContext = React.createContext({
  language: "",
  isLoading: false,
  periodClass: "",
  startLoading: () => {},
  stopLoading: () => {},
  switchLanguage: (language) => {},
  changePeriodClass: (hClass) => {},
});

const TempContextProvider = (props) => {
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [periodClass, setPeriodClass] = useState("");

  const switchLanguageHandler = (language) => {
    setLanguage(language);
  };

  const startLoadingHandler = () => {
    setIsLoading(true);
  };

  const stopLoadingHandler = () => {
    setIsLoading(false);
  };

  const changePeriodClassHandler = (hClass) => {
    setPeriodClass(hClass);
  };

  const contextValue = {
    language: language,
    isLoading: isLoading,
    periodClass: periodClass,
    startLoading: startLoadingHandler,
    stopLoading: stopLoadingHandler,
    switchLanguage: switchLanguageHandler,
    changePeriodClass: changePeriodClassHandler,
  };

  return (
    <TempContext.Provider value={contextValue}>
      {props.children}
    </TempContext.Provider>
  );
};

export default TempContextProvider;

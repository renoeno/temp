import React, { useContext } from "react";

import { TempContext } from "../../store/temp-context";

import classes from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const tempCtx = useContext(TempContext);

  const switchLanguageHandler = (event) => {
    event.preventDefault();
    const language = event.target.name;
    tempCtx.switchLanguage("" + language);
  };
  return (
    <div className={`${classes.languageSelector} roboto-title`}>
      <div>
        <a
          className={
            tempCtx.language === "en" ? classes.selected : classes.unselected
          }
          name="en"
          onClick={switchLanguageHandler}
        >
          en
        </a>
      </div>{" "}
      |{" "}
      <div>
        <a
          className={
            tempCtx.language === "pt" ? classes.selected : classes.unselected
          }
          name="pt"
          onClick={switchLanguageHandler}
        >
          pt
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;

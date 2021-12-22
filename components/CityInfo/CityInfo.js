import { useContext, useState } from "react";

import TimeDisplay from "../TimeDisplay/TimeDisplay";
import LoadingSpinner from "../UI/LoadingSpinner";

import { TempContext } from "../../store/temp-context";

import classes from "./CityInfo.module.css";

const CityInfo = (props) => {
  const tempCtx = useContext(TempContext);
  //const [doneLoading, setDoneLoading] = useState(false);

  // const changeLoadingHandler = () => {
  //   if (doneLoading === false) {
  //     setDoneLoading(true);
  //     console.log("Carregou");
  //   } else {
  //     return;
  //   }
  // };

  return (
    <div className={`${classes.cityInfo}`}>
      {tempCtx.isLoading && <LoadingSpinner />}
      {!tempCtx.isLoading && (
        <>
          <span className={classes.cityName}>{props.cityName}</span>
          <span>{props.temperature}º</span>
          <span>{props.weather}</span>
        </>
      )}
      <span>
        <TimeDisplay offset={props.offset} />
      </span>
    </div>
  );
};

export default CityInfo;

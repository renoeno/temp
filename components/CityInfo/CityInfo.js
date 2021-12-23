import { useContext, useEffect, useState } from "react";

import TimeDisplay from "../TimeDisplay/TimeDisplay";
import LoadingSpinner from "../UI/LoadingSpinner";

import useHours from "../../hooks/use-hours";

import { TempContext } from "../../store/temp-context";

import classes from "./CityInfo.module.css";

const currentPeriod = (currentHour, sunriseHour, sunsetHour) => {
  if (currentHour >= sunriseHour - 1 && currentHour <= sunriseHour + 1) {
    return "sunriseClear";
  }

  if (currentHour > sunriseHour + 1 && currentHour < sunsetHour - 1) {
    return "noonClear";
  }

  if (currentHour >= sunsetHour - 1 && currentHour <= sunsetHour + 1) {
    return "sunsetClear";
  }

  if (currentHour > sunsetHour + 1) {
    return "nightClear";
  }

  if (currentHour < sunsetHour - 1) {
    return "sunsetClear";
  }
};

const CityInfo = (props) => {
  const tempCtx = useContext(TempContext);

  const hours = useHours(props.offset, props.sunrise, props.sunset);
  const currentHour = hours.currentHour.getHours();
  const sunriseHour = hours.sunriseHour.getHours();
  const sunsetHour = hours.sunsetHour.getHours();

  const dayPeriod = currentPeriod(currentHour, sunriseHour, sunsetHour);

  useEffect(() => {
    tempCtx.changePeriodClass(dayPeriod);
  }, [dayPeriod]);

  console.log(currentHour, sunriseHour, sunsetHour, dayPeriod);

  return (
    <div className={`${classes.cityInfo}`}>
      {tempCtx.isLoading && <LoadingSpinner />}
      {!tempCtx.isLoading && (
        <>
          <span className={classes.cityName}>{props.cityName}</span>
          <span>{props.weather}</span>
          <span>{props.temperature}º</span>
        </>
      )}
      <span>
        <TimeDisplay offset={props.offset} />
      </span>
    </div>
  );
};

export default CityInfo;

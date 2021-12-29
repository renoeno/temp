import { useCallback, useState } from "react";

const useHours = (offset, sunrise = 0, sunset = 0) => {
  const [thisTime, setThisTime] = useState(null);

  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;

  const sunriseTime = new Date(sunrise).getTime();
  const sunsetTime = new Date(sunset).getTime();

  //London hour
  const utc = localTime + localOffset;
  const utcSunrise = sunriseTime + localOffset;
  const utcSunset = sunsetTime + localOffset;

  const currentTime = utc + 3600000 * offset;
  const sunriseHour = utcSunrise + 3600000 * offset;
  const sunsetHour = utcSunset + 3600000 * offset;

  const setCurrentTime = useCallback((offset) => {
    const thisDate = new Date();
    const thisLocalTime = thisDate.getTime();
    const thisLocalOffset = thisDate.getTimezoneOffset() * 60000;

    //London hour
    const thisUtc = thisLocalTime + thisLocalOffset;

    setThisTime(thisUtc + 3600000 * offset);
  }, []);

  return {
    currentHour: new Date(currentTime),
    sunriseHour: new Date(sunriseHour),
    sunsetHour: new Date(sunsetHour),
    thisTime,
    setCurrentTime,
  };
};

export default useHours;

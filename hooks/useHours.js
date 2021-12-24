import { useEffect, useState } from "react";

const useHours = (offset, sunrise = 0, sunset = 0) => {
  const [currentTime, setCurrentTime] = useState(null);
  const [currentMinute, setCurrentMinute] = useState(null);
  const [currentSecond, setCurrentSecond] = useState(null);
  const [sunsetTime, setSunsetTime] = useState(null);
  const [sunriseTime, setSunriseTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const localTime = date.getTime();
      const localOffset = date.getTimezoneOffset() * 60000;

      const sunriseTime = new Date(sunrise).getTime();
      const sunsetTime = new Date(sunset).getTime();

      //London hour
      const utc = localTime + localOffset;
      const utcSunrise = sunriseTime + localOffset;
      const utcSunset = sunsetTime + localOffset;

      const currentHour = utc + 3600000 * offset;
      const sunriseHour = utcSunrise + 3600000 * offset;
      const sunsetHour = utcSunset + 3600000 * offset;

      setCurrentTime(new Date(currentHour).getHours());
      setCurrentMinute(new Date(currentHour).getMinutes());
      setCurrentSecond(new Date(currentHour).getSeconds());
      setSunriseTime(new Date(sunriseHour).getHours());
      setSunsetTime(new Date(sunsetHour).getHours());
    }, 1000);

    return () => {
      console.log("CLEAN UP");
      clearInterval(timer);
    };
  }, [offset, sunrise, sunset]);

  return { currentTime, currentMinute, currentSecond, sunriseTime, sunsetTime };
};

export default useHours;

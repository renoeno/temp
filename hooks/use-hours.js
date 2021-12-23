const useHours = (offset, sunrise = 0, sunset = 0) => {
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

  return {
    currentHour: new Date(currentTime),
    sunriseHour: new Date(sunriseHour),
    sunsetHour: new Date(sunsetHour),
  };
};

export default useHours;

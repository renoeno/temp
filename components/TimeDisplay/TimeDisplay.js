import { useContext, useEffect, useState } from "react";

import useHours from "../../hooks/use-hours";

import { TempContext } from "../../store/temp-context";

import LoadingSpinner from "../UI/LoadingSpinner";

// const convertTime = (offset) => {
//   const date = new Date();
//   const localTime = date.getTime();
//   const localOffset = date.getTimezoneOffset() * 60000;

//   //London hour
//   const utc = localTime + localOffset;
//   const currentTime = utc + 3600000 * offset;

//   return currentTime;
// };

const TimeDisplay = (props) => {
  const tempCtx = useContext(TempContext);

  const [time, setTime] = useState("");

  useEffect(() => {
    const convertedTime = useHours(props.offset);
    const date = new Date(convertedTime.currentHour);
    const hours =
      date.getHours().toString().length < 2
        ? "0" + date.getHours()
        : date.getHours();
    const minutes =
      date.getMinutes().toString().length < 2
        ? "0" + date.getMinutes()
        : date.getMinutes();
    const seconds =
      date.getSeconds().toString().length < 2
        ? "0" + date.getSeconds()
        : date.getSeconds();

    setTime(hours + ":" + minutes + ":" + seconds);

    tempCtx.stopLoading();
  }, []);

  // const changeLoadingHandler = () => {
  //   if (tempCtx.isLoading) {
  //     tempCtx.stopLoading();
  //   }
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      const convertedTime = useHours(props.offset);
      const date = new Date(convertedTime.currentHour);
      const hours =
        date.getHours().toString().length < 2
          ? "0" + date.getHours()
          : date.getHours();
      const minutes =
        date.getMinutes().toString().length < 2
          ? "0" + date.getMinutes()
          : date.getMinutes();
      const seconds =
        date.getSeconds().toString().length < 2
          ? "0" + date.getSeconds()
          : date.getSeconds();

      setTime(hours + ":" + minutes + ":" + seconds);
    }, 1000);

    return () => {
      console.log("CLEAN UP");
      clearInterval(timer);
    };
  }, [setTime]);

  return (
    <>
      <span>{time}</span>
    </>
  );
};

export default TimeDisplay;

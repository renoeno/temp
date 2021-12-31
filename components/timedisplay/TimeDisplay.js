import { useContext, useEffect, useState } from "react";

import useHours from "../../hooks/use-hours";

import { TempContext } from "../../store/temp-context";

import LoadingSpinner from "../UI/LoadingSpinner";

const TimeDisplay = (props) => {
  const tempCtx = useContext(TempContext);
  const convertedTime = useHours(props.offset);
  const [currentTime, setCurrentTime] = useState(
    new Date(convertedTime.currentHour)
  );

  const [time, setTime] = useState("");

  useEffect(() => {
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

  useEffect(() => {
    const timer = setInterval(() => {
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
      convertedTime.setCurrentTime(props.offset);
      // console.log(new Date(convertedTime.thisTime));
    }, 1000);

    return () => {
      // console.log("CLEAN UP");
      clearInterval(timer);
    };
  }, [setTime, convertedTime]);

  return (
    <>
      <span className="roboto-title">{time}</span>
    </>
  );
};

export default TimeDisplay;

import React, { useContext, useEffect, useState } from "react";

import { TempContext } from "../../store/temp-context";

import classes from "./Layout.module.css";

const Layout = (props) => {
  // const [classChanged, setClassChanged] = useState(false);

  const tempCtx = useContext(TempContext);
  const periodClass = tempCtx.periodClass;
  // console.log(periodClass);

  // const classChangedHandler = () => {
  //   setClassChanged(true);
  //   console.log("changed");
  // };

  console.log(periodClass);
  return (
    <>
      <div className={`${classes[periodClass]} ${classes.container}`}>
        <main className={classes.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;

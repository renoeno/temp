import React, { useContext, useEffect, useState } from "react";

import { TempContext } from "../../store/temp-context";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  const tempCtx = useContext(TempContext);
  const periodClass = tempCtx.periodClass;

  return (
    <>
      <div className={`${classes[periodClass]} ${classes.container}`}>
        <main className={classes.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <div className={`${classes[props.classes]} ${classes.container}`}>
        <main className={classes.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;

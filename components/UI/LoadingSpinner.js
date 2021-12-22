import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <>
      <div class={classes.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingSpinner;

import * as React from "react";


import classes from "./Button.module.scss";

export function Button() {
  return (
    <div className={classes.app}>
      <h1 className={classes.app__title}>Hello Testing</h1>
      <h2 className={classes.app__subtitle}>
        Module SCSS in Package
      </h2>
    </div>
  );
}
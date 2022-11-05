import * as React from "react";
import classes from "./Button.module.scss";
export function Button() {
    return (React.createElement("div", { className: classes.app },
        React.createElement("h1", { className: classes.app__title }, "Hello Testing"),
        React.createElement("h2", { className: classes.app__subtitle }, "Module SCSS in Package")));
}

import * as React from "react";
import "./App.css";
function DarkText(props) {
    return (React.createElement("div", null,
        React.createElement("h2", null, props.darkText)));
}
export function DarkLight(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Signika:wght@400&display=swap", rel: "stylesheet" }),
        React.createElement("input", { type: "checkbox", id: "btn" }),
        React.createElement("div", { id: "main" },
            React.createElement("h1", { id: "first-line" }),
            React.createElement(DarkText, { darkText: props.darkText }))));
}

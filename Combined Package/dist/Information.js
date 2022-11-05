import React from "react";
import "./Information.css";
export function Information(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "privacy" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12 text-center" },
                        React.createElement("h2", null, props.PageHeading || "About Shop"),
                        React.createElement("img", { src: props.dividerImage || "https://i.imgur.com/gKL9c82.png", width: 206, height: 26 }),
                        " "),
                    React.createElement("div", { className: "col-md-10 col-md-offset-1 text-center " }, props.infoArray &&
                        props.infoArray.map((element, index) => (React.createElement("p", null, element.textArea || "Write Your Text Area")))))))));
}

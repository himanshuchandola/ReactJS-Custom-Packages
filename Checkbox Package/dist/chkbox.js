import * as React from "react";
import "./App.css";
export function CheckboxxPkg(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "SSwrapper" },
            React.createElement("h2", null,
                props.Title || "Custom Checkbox",
                " ",
                React.createElement("i", { className: "fa fa-check" }),
                " "),
            props.CheckBoxArray &&
                props.CheckBoxArray.map((element, index) => (React.createElement("div", { key: index },
                    React.createElement("input", { type: "checkbox", id: "check" + (index + 1), value: element.value }),
                    React.createElement("label", { htmlFor: "check" + (index + 1) },
                        React.createElement("div", null,
                            React.createElement("i", { className: "fa fa-check" })),
                        " ",
                        element.text)))))));
}

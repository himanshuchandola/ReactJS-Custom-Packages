import * as React from "react";
import "./App.css";
export function Contactme() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container" },
            React.createElement("h1", null, "Contact Us"),
            React.createElement("form", { method: "post" },
                React.createElement("p", { className: "name" },
                    React.createElement("input", { name: "name", type: "text", className: "feedback-input", placeholder: "Name", id: "name" })),
                React.createElement("p", { className: "email" },
                    React.createElement("input", { name: "email", type: "text", className: "feedback-input", id: "email", placeholder: "Email" })),
                React.createElement("p", { className: "text" },
                    React.createElement("textarea", { name: "text", className: "feedback-input", id: "comment", placeholder: "Comment", defaultValue: "" })),
                React.createElement("div", { className: "submit" },
                    React.createElement("input", { type: "submit", defaultValue: "SEND!", id: "button-blue" }))))));
}

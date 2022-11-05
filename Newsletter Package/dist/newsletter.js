import * as React from "react";
import "./App.css";
function News(props) {
    return (React.createElement("div", null,
        React.createElement("h3", null, props.newshere)));
}
function Emailss(props) {
    return (React.createElement("div", null,
        React.createElement("h3", null, props.emailhere)));
}
function Submitss(props) {
    return (React.createElement("div", null,
        React.createElement("h3", null, props.submithere)));
}
export function NewsLetter(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { id: "subscribebox" },
                React.createElement("i", { className: "fa fa-envelope fa-4x" }),
                React.createElement(News, { newshere: props.newshere }),
                React.createElement("form", null,
                    React.createElement("input", { type: "email", placeholder: props.emailhere, id: "email-input" }),
                    React.createElement("input", { type: "submit", value: props.submithere || 'Submit', id: "subscribe-button" }))))));
}

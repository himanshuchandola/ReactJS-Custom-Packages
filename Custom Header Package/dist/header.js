import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
export function Header() {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "brand-navigation" },
            React.createElement("div", { className: "content" },
                React.createElement("img", { className: "logo-nav", src: "/logo192.png", alt: "hi" }),
                React.createElement("nav", null,
                    React.createElement(Router, null,
                        React.createElement("ul", { className: "navigation" },
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/" }, "Home")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/" }, "About")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/" }, "Photos")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/" }, "Contact Us"))))),
                React.createElement("button", { className: "button-dark" }, "Account")))));
}

import React from "react";
import "./Header.css";
export function Header(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row align-items-center" },
                    React.createElement("div", { className: "col-auto" },
                        React.createElement("div", { className: "logo" },
                            React.createElement("figure", null, props.children))),
                    React.createElement("div", { className: "col" },
                        React.createElement("div", { className: "search-block" },
                            React.createElement("div", { className: "d-flex align-items-center" },
                                React.createElement("span", { className: "search-icon" },
                                    React.createElement("img", { className: "img-fluid", src: "https://i.imgur.com/jhDdNi5.png", alt: "image" })),
                                React.createElement("input", { type: "search", className: "form-control", placeholder: props.searchPlaceholderText || "Search items, collections...", "aria-label": "Search", "aria-describedby": "search-addon" })))),
                    React.createElement("div", { className: "col-auto" },
                        React.createElement("div", { className: "nav-right d-flex align-items-center" },
                            React.createElement("nav", null,
                                React.createElement("ul", { className: "list-unstyled" }, props.HeaderDetails &&
                                    props.HeaderDetails.map((element, index) => (React.createElement("li", { key: index },
                                        React.createElement("a", { className: "nav-link", href: "", onClick: (e) => { e.preventDefault(); props.commonOnClick(e, element); } }, element.headerItem || "Home")))))),
                            React.createElement("div", { className: "external-nav" },
                                React.createElement("a", { href: "" },
                                    React.createElement("img", { src: "https://i.imgur.com/hVDiqTJ.png", alt: "image" })),
                                React.createElement("a", { className: "login-btn", href: "" }, props.loginButton || " Login")))))))));
}

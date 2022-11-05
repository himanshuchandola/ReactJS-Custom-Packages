import React from 'react';
import "./Header.css";
export function Search(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row align-items-center" },
                    React.createElement("div", { className: "col" },
                        React.createElement("div", { className: "search-block" },
                            React.createElement("div", { className: "d-flex align-items-center" },
                                React.createElement("span", { className: "search-icon" },
                                    React.createElement("img", { className: "img-fluid", src: "https://i.imgur.com/jhDdNi5.png", alt: "image" })),
                                React.createElement("input", { type: "search", className: "form-control", placeholder: props.searchPlaceholderText || "Search items, collections...", "aria-label": "Search", "aria-describedby": "search-addon" })))))))));
}

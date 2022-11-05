import React from 'react';
import "./Footer.css";
export function NewsLetter(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("footer", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row justify-content-lg-between justify-content-center mb-lg-0 mb-4" },
                    React.createElement("div", { className: "col-12 col-md-6 col-lg-4" },
                        React.createElement("div", { className: "news-latter" },
                            React.createElement("h4", null, props.newsletterText || "Stay in the loop"),
                            React.createElement("p", null, props.newsletterDesc || "For product announcements and exclusive insights"),
                            React.createElement("div", { className: "row g-0 align-items-stretch position-relative" },
                                React.createElement("div", { className: "col news_input-group d-flex align-items-center" },
                                    React.createElement("span", null,
                                        React.createElement("i", { className: "fas fa-envelope" })),
                                    React.createElement("input", { type: "text", className: "form-control", name: "email", placeholder: props.newsletterPlaceholder || "Enter your email" })),
                                React.createElement("span", { className: "col-auto news-btn" },
                                    React.createElement("button", { className: "button", type: "button" }, props.newsletterbutton || "subscribe"))))))))));
}

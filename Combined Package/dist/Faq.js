import React from "react";
import "./Faq.css";
export function Faq(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "accordion" }, props.faqArray &&
            props.faqArray.map((element, index) => (React.createElement("div", { key: index, className: "accordion-item" },
                React.createElement("input", { type: "checkbox", id: "accordion1" }),
                React.createElement("label", { htmlFor: "accordion1", className: "accordion-item-title" },
                    React.createElement("span", { className: "icon" }),
                    element.faqQues || "How can I track my order ?"),
                React.createElement("div", { className: "accordion-item-desc" }, element.faqAns || "Via Our Website Official Mobile App")))))));
}

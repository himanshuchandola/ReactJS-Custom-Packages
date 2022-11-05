import * as React from "react";
import "./App.css";
export function Faqs(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "faq" },
            React.createElement("div", { className: "faq__logo__holder" },
                React.createElement("div", { className: "faq__logo" },
                    React.createElement("img", { src: props.faqlogo }))),
            React.createElement("div", { className: "faq__holder" },
                React.createElement("h1", { className: "faq__heading" },
                    " ",
                    props.faqhead || "FAQ"),
                props.faqques &&
                    props.faqques.map((element, index) => (React.createElement("details", { key: index, className: "faq__detail" },
                        React.createElement("summary", { className: "faq__summary" },
                            React.createElement("span", { className: "faq__question" }, element.ques)),
                        React.createElement("p", { className: "faq__text" }, element.ans))))))));
}

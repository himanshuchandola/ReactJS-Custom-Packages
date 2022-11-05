import * as React from "react";
import "./App.css";
export function OurTeam(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "our-webcoderskull padding-lg" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row heading heading-icon" },
                    React.createElement("h2", null, props.TeamTitle || "Our Team")),
                React.createElement("ul", { className: "row" }, props.TeamProps &&
                    props.TeamProps.map((element, index) => (React.createElement("li", { key: index, className: "col-12 col-md-6 col-lg-3" },
                        React.createElement("div", { className: "cnt-block equal-hight" },
                            React.createElement("figure", { className: "img-responsive" },
                                React.createElement("img", { src: element.memberPhoto || "https://www.webcoderskull.com/img/team4.png", alt: "" })),
                            React.createElement("h3", null, element.memberName || "Member 1"),
                            React.createElement("p", null, element.memberRole || "ReactJS Developer"))))))))));
}

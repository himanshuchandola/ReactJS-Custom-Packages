import React from "react";
import "./Pricing.css";
export function Pricing(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "title" },
            " ",
            props.title || "Pricing table",
            " "),
        React.createElement("div", { id: "container" }, props.pricingArray &&
            props.pricingArray.map((element, index) => (React.createElement("div", { key: index, className: "pricetab" },
                React.createElement("h1", null,
                    " ",
                    element.planName || "FREE",
                    " "),
                React.createElement("div", { className: "price" },
                    React.createElement("h2", null,
                        " ",
                        element.planPrice || "Free",
                        " ")),
                React.createElement("div", { className: "infos" }, props.infoArray && props.infoArray.map((element, index) => (React.createElement("h3", { key: index },
                    " ",
                    element.planFeatures || "Premium Profile Listing",
                    " ")))),
                React.createElement("div", { className: "pricefooter" },
                    React.createElement("div", { className: "button" },
                        React.createElement("a", { href: "#" },
                            " ",
                            element.getStarted || "Get started",
                            " ")))))))));
}

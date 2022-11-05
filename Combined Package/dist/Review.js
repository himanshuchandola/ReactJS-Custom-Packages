import React from "react";
import "./Review.css";
export function MyReviews(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "our-review" },
            React.createElement("div", { className: "container" },
                React.createElement("h2", null, props.reviewHeading || "Our Reviews"),
                React.createElement("img", { src: props.reviewImage || "https://i.imgur.com/gKL9c82.png", width: 206, height: 26 }),
                React.createElement("div", { className: "row" }, props.reviewArray &&
                    props.reviewArray.map((element, index) => (React.createElement("div", { key: index, className: "col-xs-6 col-sm-6 col-md-3" },
                        React.createElement("div", { className: "reviewBox" },
                            React.createElement("figure", null,
                                React.createElement("img", { src: element.columnImg || "https://i.imgur.com/yVOevTD.png", className: "img-responsive" })),
                            React.createElement("div", { className: "star" },
                                React.createElement("img", { src: element.starImg || "https://i.imgur.com/XVjCvK5.png" }),
                                React.createElement("span", { className: "pull-right" }, element.reviewDate || "10/8/18")),
                            React.createElement("h3", null, element.userName || "Hugh Jackman"),
                            React.createElement("p", null, element.descriptionText || "Very Good"))))))))));
}

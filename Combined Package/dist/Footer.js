import * as React from "react";
import "./Footer.css";
export function MyFooter(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("footer", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "footerTop" },
                    React.createElement("div", { className: "row" },
                        props.NewsLetterSignupDetails &&
                            props.NewsLetterSignupDetails.map((element, index) => (React.createElement("div", { key: index, className: "col-md-3 col-sm-6" },
                                React.createElement("ul", { className: "address" },
                                    React.createElement("h4", null, element.newsLetterText || "NEWSLETTER SIGNUP"),
                                    React.createElement("li", null,
                                        React.createElement("figure", null,
                                            React.createElement("img", { src: element.mapIcon ||
                                                    "https://i.imgur.com/vMd2F5E.png" })),
                                        element.addressText ||
                                            "123 Main Demo,Lorem ipsum, USA",
                                        " "),
                                    React.createElement("li", null,
                                        React.createElement("figure", null,
                                            React.createElement("img", { src: element.phoneIcon ||
                                                    "https://i.imgur.com/Gr0APXo.png" })),
                                        element.MobileNumber || "+99 123 456 7890"),
                                    React.createElement("li", null,
                                        React.createElement("figure", null,
                                            React.createElement("img", { src: element.emailIcon ||
                                                    "https://i.imgur.com/uFp5dW1.png" })),
                                        element.emailAddress || "info@fioncanvas.co.za"))))),
                        React.createElement("div", { className: "col-md-3 col-sm-6 " },
                            React.createElement("h4", null, props.colHeading1 || "My Account"),
                            React.createElement("ul", { className: "btmMenus" }, props.FooterDetails1 &&
                                props.FooterDetails1.map((element, index) => (React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, element.linkText1 || "Sign In")))))),
                        React.createElement("div", { className: "col-md-3 col-sm-6 " },
                            React.createElement("h4", null, props.colHeading2 || "WHY BUY FROM US"),
                            React.createElement("ul", { className: "btmMenus" }, props.FooterDetails2 &&
                                props.FooterDetails2.map((element, index) => (React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, element.linkText2 || "Sign In")))))),
                        React.createElement("div", { className: "col-md-3 col-sm-6 " },
                            React.createElement("h4", null, props.colHeading3 || "INFORMATION"),
                            React.createElement("ul", { className: "btmMenus" }, props.FooterDetails3 &&
                                props.FooterDetails3.map((element, index) => (React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, element.linkText3 || "Sign In")))))))),
                React.createElement("div", { className: "footerMid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("h3", null, props.NewsLetterHeadingText || "Connect with Us"),
                            React.createElement("p", null, props.NewsLetterDescription ||
                                "Sign up our Newsletter for Exclusive Discounts")),
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("form", null,
                                React.createElement("input", { name: "", type: "text", placeholder: props.NewsLetterEmailPlaceholder || "Email id" }),
                                React.createElement("button", { type: "submit" },
                                    React.createElement("i", { className: "fa fa-paper-plane" })))))),
                React.createElement("div", { className: "footerBtm" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" }, props.footerCopyright ||
                            "© 2018 Fion Art &amp; Décor. All Rights Reserved."),
                        React.createElement("div", { className: "col-sm-6 text-right" },
                            React.createElement("img", { src: props.PaymentCardIcons || "https://i.imgur.com/vbv4wzC.png" }))))))));
}

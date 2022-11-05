import React from "react";
import "./Payment.css";
export function Payment(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "position-relative" },
            React.createElement("section", { className: "payments-step py-5" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row justify-content-center g-3 g-lg-5" },
                        React.createElement("div", { className: "col-12" },
                            React.createElement("div", { className: "form-steps d-flex justify-content-center align-items-center" },
                                React.createElement("div", { className: "stepno active" },
                                    React.createElement("span", null, "1"),
                                    " ",
                                    props.heading || "Summary"))),
                        React.createElement("div", { className: "col-md-4 d-none d-sm-block" },
                            React.createElement("figure", null,
                                React.createElement("img", { className: "img-fluid", src: props.itemImage || "https://i.imgur.com/nnazdPV.png", alt: "image" }))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "payment-form" },
                                React.createElement("div", { className: "payment-sumry d-flex w-100 justify-content-between mb-3" },
                                    props.heading || "Summary ",
                                    React.createElement("label", { className: "float-end" }, "Fixed")),
                                React.createElement("div", { className: "payment-subtotal" },
                                    React.createElement("div", { className: "d-flex w-100 justify-content-between mb-3" },
                                        props.subtotal || "Subtotal",
                                        React.createElement("label", null,
                                            props.newPrice,
                                            " ",
                                            React.createElement("br", null),
                                            React.createElement("span", null, props.oldPrice))),
                                    React.createElement("div", { className: "d-flex w-100 justify-content-between" },
                                        props.fee || "Fee",
                                        React.createElement("label", { className: "float-end" },
                                            props.newFees || "2",
                                            " ",
                                            React.createElement("br", null),
                                            React.createElement("span", null, props.oldFees)))),
                                React.createElement("div", { className: "payment-total" },
                                    React.createElement("div", { className: "d-flex w-100 justify-content-between" },
                                        props.total || "Total",
                                        React.createElement("label", { className: "float-end" },
                                            props.newTotal,
                                            " ",
                                            React.createElement("br", null),
                                            React.createElement("span", null, props.oldTotal)))),
                                React.createElement("a", { href: "", className: "button-primary mt-lg-4 mt-2 d-block text-center" }, " Proceed to Payment")))))))));
}

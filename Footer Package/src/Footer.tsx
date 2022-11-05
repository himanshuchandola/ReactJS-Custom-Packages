import React from 'react'
import "./Footer.css"

type FooterProps = {
    newsletterText?: string;
    newsletterDesc?: string;
    newsletterPlaceholder?: string;
    newsletterbutton?: string;
    footerCopyrightDetails?: string;
    children?: React.ReactNode;
    footerItem?: any;
};

export function Footer(props: FooterProps) {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center mb-lg-0 mb-4">
                        <div className="col-12 col-lg-2 mb-lg-0 mb-3">
                            <div className="footerLogo">
                                {props.children}
                            </div>
                        </div>
                        {props.footerItem && props.footerItem.map((element: any, index: any) => (
                            <div key={index} className="col col-md-4 col-lg-2">
                                <div className="quick-links">
                                    <h4>{element.CategoryName || "Categories"}</h4>
                                    <ul className="list-unstyled">
                                        {element.Item &&
                                            element.Item.map((innerItem: any, InnerIndex: any) => (
                                                <li key={InnerIndex}>
                                                    <a href="" >{innerItem.categorylistText || "All"}</a>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="news-latter">
                                <h4>{props.newsletterText || "Stay in the loop"}</h4>
                                <p>{props.newsletterDesc || "For product announcements and exclusive insights"}</p>
                                <div className="row g-0 align-items-stretch position-relative">
                                    <div className="col news_input-group d-flex align-items-center">
                                        <span>
                                            <i className="fas fa-envelope" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder={props.newsletterPlaceholder || "Enter your email"}
                                        />
                                    </div>
                                    <span className="col-auto news-btn">
                                        <button className="button" type="button">
                                            {props.newsletterbutton || "subscribe"}
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copywright">
                        <div className="row justify-content-end">
                            <div className="col">
                                <div className="copywright-content text-center">
                                    <p>
                                        {props.footerCopyrightDetails || "© 2022 Brand, Inc. All Rigths Reserved"}
                                    </p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="socialLinks">
                                    <a className="twtr" href="" target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="fb" href="" target="_blank">
                                        <i className="fab fa-facebook" />
                                    </a>
                                    <a className="lnkdin" href="" target="_blank">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a className="ytube" href="" target="_blank">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

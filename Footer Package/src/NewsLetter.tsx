import React from 'react'
import "./Footer.css"

type NewsLetterProps = {
    newsletterText?: string;
    newsletterDesc?: string;
    newsletterPlaceholder?: string;
    newsletterbutton?: string;
}

export function NewsLetter(props: NewsLetterProps) {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center mb-lg-0 mb-4">
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
                </div>
            </footer>
        </>
    )
}

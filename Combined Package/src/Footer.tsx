import * as React from "react";
import "./Footer.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

type FooterProps = {
  NewsLetterSignupDetails?: any;
  FooterDetails?: any;
  FooterDetails1?: any;
  FooterDetails2?: any;
  FooterDetails3?: any;
  NewsLetterHeadingText?: string;
  NewsLetterDescription?: string;
  NewsLetterEmailPlaceholder?: string;
  footerCopyright?: string;
  PaymentCardIcons?: string;
  colHeading1?: string;
  colHeading2?: string;
  colHeading3?: string;
};

export function MyFooter(props: FooterProps) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerTop">
            <div className="row">
              {props.NewsLetterSignupDetails &&
                props.NewsLetterSignupDetails.map(
                  (element: any, index: any) => (
                    <div key={index} className="col-md-3 col-sm-6">
                      <ul className="address">
                        <h4>{element.newsLetterText || "NEWSLETTER SIGNUP"}</h4>
                        <li>
                          <figure>
                            <img
                              src={
                                element.mapIcon ||
                                "https://i.imgur.com/vMd2F5E.png"
                              }
                            />
                          </figure>
                          {element.addressText ||
                            "123 Main Demo,Lorem ipsum, USA"}{" "}
                        </li>
                        <li>
                          <figure>
                            <img
                              src={
                                element.phoneIcon ||
                                "https://i.imgur.com/Gr0APXo.png"
                              }
                            />
                          </figure>
                          {element.MobileNumber || "+99 123 456 7890"}
                        </li>
                        <li>
                          <figure>
                            <img
                              src={
                                element.emailIcon ||
                                "https://i.imgur.com/uFp5dW1.png"
                              }
                            />
                          </figure>
                          {element.emailAddress || "info@fioncanvas.co.za"}
                        </li>
                      </ul>
                    </div>
                  )
                )}

              <div className="col-md-3 col-sm-6 ">
                <h4>{props.colHeading1 || "My Account"}</h4>
                <ul className="btmMenus">
                  {props.FooterDetails1 &&
                    props.FooterDetails1.map((element: any, index: any) => (
                      <li>
                        <a href="#">{element.linkText1 || "Sign In"}</a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 ">
                <h4>{props.colHeading2 || "WHY BUY FROM US"}</h4>
                <ul className="btmMenus">
                  {props.FooterDetails2 &&
                    props.FooterDetails2.map((element: any, index: any) => (
                      <li>
                        <a href="#">{element.linkText2 || "Sign In"}</a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 ">
                <h4>{props.colHeading3 || "INFORMATION"}</h4>
                <ul className="btmMenus">
                  {props.FooterDetails3 &&
                    props.FooterDetails3.map((element: any, index: any) => (
                      <li>
                        <a href="#">{element.linkText3 || "Sign In"}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footerMid">
            <div className="row">
              <div className="col-sm-6">
                <h3>{props.NewsLetterHeadingText || "Connect with Us"}</h3>
                <p>
                  {props.NewsLetterDescription ||
                    "Sign up our Newsletter for Exclusive Discounts"}
                </p>
              </div>
              <div className="col-sm-6">
                <form>
                  <input
                    name=""
                    type="text"
                    placeholder={props.NewsLetterEmailPlaceholder || "Email id"}
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footerBtm">
            <div className="row">
              <div className="col-sm-6">
                {props.footerCopyright ||
                  "© 2018 Fion Art &amp; Décor. All Rights Reserved."}
              </div>
              <div className="col-sm-6 text-right">
                <img
                  src={
                    props.PaymentCardIcons || "https://i.imgur.com/vbv4wzC.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

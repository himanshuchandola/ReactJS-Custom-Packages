import * as React from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

type HeaderProps = {
  infoText?: string;
  phone?: string;
  login?: string;
  signup?: string;
  HeaderDetails?: any;
  Link?: any;
  SearchImage?: string;
  CartImage?: string;
  children?: React.ReactNode;
  logo?: string;
};

export function MyHeader(props: HeaderProps) {
  return (
    <>
      <header className="fixed-header">
        <div className="topBar visible-title">
          <div className="container visible-title">
            <div className="row visible-title">
              <div className="col-xs-9 col-sm-8 visible-title">
                <ul className="infoDetail">
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      {props.infoText || "info@fioncanvas.co.za"}
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    {props.phone || "+1 (987) 654-3210"}
                  </li>
                </ul>
              </div>
              <div className="col-xs-3 col-sm-4 visible-title">
                <Router>
                  <ul className="siteLogin">
                    <li>
                      <Link to="/">{props.login || "Login"}</Link>
                    </li>
                    <li>
                      <Link to="/"> {props.signup || "Signup"} </Link>
                    </li>
                  </ul>
                </Router>
              </div>
            </div>
          </div>
        </div>
        <div className="topMenu visible-title">
          <div className="container visible-title">
            <div className="row visible-title">
              <div className="col-md-2 col-sm-2 visible-title ">
                <a href="index.html" className="logo">
                  {props.children}
                  {/* {props.logo || "https://i.imgur.com/gFUwmP6.png"}  */}
                </a>
              </div>
              <div className="col-md-10 col-sm-10 text-right visible-title">
                <ul className="search">
                  <li>
                    <button>
                      <img
                        src={
                          props.SearchImage || "https://i.imgur.com/ibJ8xlT.png"
                        }
                      />
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={
                          props.CartImage || "https://i.imgur.com/g9Vcjtk.png"
                        }
                      />
                    </a>
                  </li>
                </ul>
                <div id="cssmenu" className="visible-title">
                  <div id="head-mobile" className="visible-title" />
                  <div className="button visible-title" />
                  <ul>
                    {props.HeaderDetails &&
                      props.HeaderDetails.map((element: any, index: any) => (
                        <Router>
                          <li key={index} className="active">
                            <Link to="/">{element.HeaderText || "Login"}</Link>
                          </li>
                        </Router>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchForm visible-title">
          <form>
            <input
              type="search"
              className="sb"
              name="q"
              autoComplete="off"
              placeholder="Search here..."
            />
            <button type="submit" className="fa fa-search" />
          </form>
        </div>
      </header>
    </>
  );
}

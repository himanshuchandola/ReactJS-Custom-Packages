import React from "react";
import "./Header.css";

type HeaderProps = {
  loginButton?: string;
  searchPlaceholderText?: string;
  HeaderDetails?: any;
  LoginDetails?: any;
  children?: React.ReactNode;
  commonOnClick?: any;
};

export function Header(props: HeaderProps) {
  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="logo">
                <figure>{props.children}</figure>
              </div>
            </div>
            <div className="col">
              <div className="search-block">
                <div className="d-flex align-items-center">
                  <span className="search-icon">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/jhDdNi5.png"
                      alt="image"
                    />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder={
                      props.searchPlaceholderText ||
                      "Search items, collections..."
                    }
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="nav-right d-flex align-items-center">
                <nav>
                  <ul className="list-unstyled">
                    {props.HeaderDetails &&
                      props.HeaderDetails.map((element: any, index: any) => (
                        <li key={index}>
                          <a
                            className="nav-link"
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              props.commonOnClick(e, element);
                            }}
                          >
                            {element.headerItem || "Home"}
                          </a>
                        </li>
                      ))}
                  </ul>
                </nav>

                {props.LoginDetails &&
                  props.LoginDetails.map((element: any, index: any) => (
                    <div className="external-nav">
                      <a
                        className="login-btn"
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          props.commonOnClick(e, element);
                        }}
                      >
                        {props.loginButton || "Login"}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

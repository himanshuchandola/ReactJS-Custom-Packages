import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

export function Header () {
  
  return (
    <>
      <header className="brand-navigation">
        <div className="content">
          <img className="logo-nav" src="/logo192.png" alt="hi" />
          <nav>
            <Router>
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>   
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Photos</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </Router>
          </nav>
          <button className="button-dark">Account</button>
        </div>
      </header>
    </>
  );
}

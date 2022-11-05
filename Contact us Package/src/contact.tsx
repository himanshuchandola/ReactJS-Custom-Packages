import * as React from "react";
import "./App.css";

export function Contactme() {
  return (
    <>
<div className="container">
  <h1>Contact Us</h1>
  <form method="post">
    <p className="name">
      <input
        name="name"
        type="text"
        className="feedback-input"
        placeholder="Name"
        id="name"
      />
    </p>
    <p className="email">
      <input
        name="email"
        type="text"
        className="feedback-input"
        id="email"
        placeholder="Email"
      />
    </p>
    <p className="text">
      <textarea
        name="text"
        className="feedback-input"
        id="comment"
        placeholder="Comment"
        defaultValue={""}
      />
    </p>
    <div className="submit">
      <input type="submit" defaultValue="SEND!" id="button-blue" />
    </div>
  </form>
</div>

    </>
  );
}

import * as React from "react";
import "./App.css";

type NewsProps = {
  newshere?: string;
  emailhere?: string;
  submithere?: string;
  color?: string;
}

function News(props: NewsProps){
  return(
    <div>
    <h3>{props.newshere}</h3>
    </div>
  )
}

function Emailss(props: NewsProps){
  return(
    <div>
    <h3>{props.emailhere}</h3>
    </div>
  )
}
function Submitss(props: NewsProps){
  return(
    <div>
    <h3>{props.submithere}</h3>
    </div>
  )
}


export function NewsLetter(props:NewsProps) {
  return (
    <>
     <div className="wrapper">
  <div id="subscribebox" >

    <i className="fa fa-envelope fa-4x" />
    {/* <h3>Join Our Newsletter</h3> */}
    <News newshere={props.newshere} />
    <form>
      <input type="email" placeholder={props.emailhere} id="email-input" />
      <input type="submit" value={props.submithere||'Submit'} id="subscribe-button" />
    </form>
  </div>
</div>
    </>
  );
}

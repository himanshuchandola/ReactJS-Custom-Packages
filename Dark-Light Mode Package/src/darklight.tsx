import * as React from "react";
import "./App.css";

type DarkTextProps = {
  darkText?: string;
}

function DarkText(props: any){
  return(
    <div>
    <h2>{props.darkText}</h2>
    </div>
  )
}


export function DarkLight(props:any) {
  return (
    <>
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Signika:wght@400&display=swap"
    rel="stylesheet"
  />
  <input type="checkbox" id="btn" />
  <div id="main">
    <h1 id="first-line"></h1>
    <DarkText darkText={props.darkText} />

  </div>
    </>
  );
}

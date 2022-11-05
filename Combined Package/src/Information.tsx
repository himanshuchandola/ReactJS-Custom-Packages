import React from "react";
import "./Information.css";

type InfoProps = {
  infoArray?: any;
  PageHeading?: string;
  dividerImage?: string;
};

export function Information(props: InfoProps) {
  return (
    <>
      <section className="privacy">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>{props.PageHeading || "About Shop"}</h2>
              <img
                src={props.dividerImage || "https://i.imgur.com/gKL9c82.png"}
                width={206}
                height={26}
              />{" "}
            </div>
            <div className="col-md-10 col-md-offset-1 text-center ">
              {props.infoArray &&
                props.infoArray.map((element: any, index: any) => (
                  <p>{element.textArea || "Write Your Text Area"}</p>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

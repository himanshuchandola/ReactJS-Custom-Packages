import * as React from "react";
import "./App.css";

type checkProps = {
  Title?: string;
  CheckBoxArray?: any;
};

export function CheckboxxPkg(props: checkProps) {


  return (
    <>
      <div id="SSwrapper">
        <h2>
          {props.Title || "Custom Checkbox"} <i className="fa fa-check" />{" "}
        </h2>
        {props.CheckBoxArray &&
          props.CheckBoxArray.map((element: any, index: any) => (
            <div key={index}>
              <input type="checkbox" id={"check"+(index+1)} value={element.value} />
              <label htmlFor={"check"+(index+1)}>
                <div>
                  <i className="fa fa-check"></i>
                </div>{" "}
                {element.text}
              </label>
            </div>
          ))}
      </div>
    </>
  );
}

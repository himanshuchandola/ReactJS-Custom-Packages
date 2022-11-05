import * as React from "react";
import "./App.css";

type FaqProps = {
  faqhead?: string;
  faqques?: any;
  faqlogo?: string;
};

export function Faqs(props: FaqProps) {
  return (
    <>
      <main className="faq">
        <div className="faq__logo__holder">
          <div className="faq__logo">
            <img src={props.faqlogo} />
          </div>
        </div>
        <div className="faq__holder">
          <h1 className="faq__heading"> {props.faqhead || "FAQ"}</h1>
          {props.faqques &&
            props.faqques.map((element: any, index: any) => (
              <details key={index} className="faq__detail">
                <summary className="faq__summary">
                  <span className="faq__question">{element.ques}</span>
                </summary>
                <p className="faq__text">{element.ans}</p>
              </details>
            ))}
        </div>
      </main>
    </>
  );
}

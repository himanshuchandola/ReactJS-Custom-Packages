import React from "react";
import "./Faq.css";

type FaqProps = {
  faqArray?: any;
};

export function Faq(props: FaqProps) {
  return (
    <>
      <div className="accordion">
        {props.faqArray &&
          props.faqArray.map((element: any, index: any) => (
            <div key={index} className="accordion-item">
              <input type="checkbox" id="accordion1" />
              <label htmlFor="accordion1" className="accordion-item-title">
                <span className="icon" />
                {element.faqQues || "How can I track my order ?"}
              </label>
              <div className="accordion-item-desc">
                {element.faqAns || "Via Our Website Official Mobile App"}
              </div>
            </div>
          ))}
      </div>

 {/*      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel-group" id="accordion">
                {props.faqArray &&
                  props.faqArray.map((element: any, index: any) => (
                    <div key={index} className="panel panel-default">
                      <div className="panel-heading">
                        <h4
                          className="panel-title accordion-toggle"
                          data-toggle=".panel-collapse"
                          data-parent="#accordion"
                        >
                          {element.faqQues || "Who ships my order ?"}
                          <i className="indicator fa fa-plus  pull-right" />{" "}
                        </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">
                          {element.faqAns ||
                            "Our delivery partner is Fastway couriers."}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-sm-12">
              <p className="answer">
                {props.faqFooterText ||
                  "We did not answer your questions ? Kindly email us at info@baobabcanvas.co.za At your service."}
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

import React from "react";
import "./Payment.css";

type PaymentProps = {
  itemImage?: string;
  oldPrice?: string;
  newPrice?: string;
  oldFees?: string;
  newFees?: string;
  oldTotal?: string;
  newTotal?: string;
  heading?: string;
  subtotal?: string;
  fee?: string;
  total?: string;
};

export function Payment(props: PaymentProps) {
  return (
    <>
      <main className="position-relative">
        <section className="payments-step py-5">
          <div className="container">
            <div className="row justify-content-center g-3 g-lg-5">
              <div className="col-12">
                <div className="form-steps d-flex justify-content-center align-items-center">
                  <div className="stepno active">
                    <span>1</span> {props.heading || "Summary"}
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-sm-block">
                <figure>
                  <img
                    className="img-fluid"
                    src={props.itemImage || "https://i.imgur.com/nnazdPV.png"}
                    alt="image"
                  />
                </figure>
              </div>
              <div className="col-md-4">
                <div className="payment-form">
                  <div className="payment-sumry d-flex w-100 justify-content-between mb-3">
                    {props.heading || "Summary "}<label className="float-end">Fixed</label>
                  </div>
                  <div className="payment-subtotal">
                    <div className="d-flex w-100 justify-content-between mb-3">
                      {props.subtotal || "Subtotal"}
                      <label>
                        {props.newPrice} <br />
                        <span>{props.oldPrice}</span>
                      </label>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                      {props.fee || "Fee"}
                      <label className="float-end">
                        {props.newFees || "2"} <br />
                        <span>{props.oldFees}</span>
                      </label>
                    </div>
                  </div>
                  <div className="payment-total">
                    <div className="d-flex w-100 justify-content-between">
                      {props.total || "Total"}
                      <label className="float-end">
                        {props.newTotal} <br />
                        <span>{props.oldTotal}</span>
                      </label>
                    </div>
                  </div>
                  <a
                    href="" className="button-primary mt-lg-4 mt-2 d-block text-center"
                  > Proceed to Payment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
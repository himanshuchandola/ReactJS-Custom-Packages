import React from "react";
import "./Review.css";

type ReviewProps = {
  reviewHeading?: string;
  reviewImage?: string;
  reviewArray?: any;
};

export function MyReviews(props: ReviewProps) {
  return (
    <>
      <section className="our-review">
        <div className="container">
          <h2>{props.reviewHeading || "Our Reviews"}</h2>
          <img
            src={props.reviewImage || "https://i.imgur.com/gKL9c82.png"}
            width={206}
            height={26}
          />
          <div className="row">
            {props.reviewArray &&
              props.reviewArray.map((element: any, index: any) => (
                <div key={index} className="col-xs-6 col-sm-6 col-md-3">
                  <div className="reviewBox">
                    <figure>
                      <img
                        src={
                          element.columnImg || "https://i.imgur.com/yVOevTD.png"
                        }
                        className="img-responsive"
                      />
                    </figure>
                    <div className="star">
                      <img
                        src={
                          element.starImg || "https://i.imgur.com/XVjCvK5.png"
                        }
                      />
                      <span className="pull-right">
                        {element.reviewDate || "10/8/18"}
                      </span>
                    </div>
                    <h3>{element.userName || "Hugh Jackman"}</h3>
                    <p>{element.descriptionText || "Very Good"}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

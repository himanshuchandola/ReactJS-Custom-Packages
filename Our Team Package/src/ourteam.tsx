import * as React from "react";
import "./App.css";

type ourTeamProps = {
  TeamTitle?: string;
  MemberName?: string;
  MemberRole?: string;
  MemberPhoto?: string;
  TeamProps?: any;
};

export function OurTeam(props: ourTeamProps) {
  return (
    <>
      <section className="our-webcoderskull padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>{props.TeamTitle || "Our Team"}</h2>
          </div>
          <ul className="row">
            {props.TeamProps &&
              props.TeamProps.map((element: any, index: any) => (
                <li key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="cnt-block equal-hight">
                    <figure className="img-responsive">
                      <img src={element.memberPhoto || "https://www.webcoderskull.com/img/team4.png" }alt="" />
                    </figure>
                    <h3>{element.memberName || "Member 1" }</h3>
                    <p>{element.memberRole || "ReactJS Developer"}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

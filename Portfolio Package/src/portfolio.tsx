import React from "react";
import "./portfolio.css";

type PortfolioProps = {
  profileImage?: string;
  profileName?: string;
  professiomName?: string;
  footercredits?: string;
  cv?: string;
  instaDetails?: string;
  linkedinDetails?: string;
  githubDetails?: string;
  portfolioArray?: any;
  whatsappInfo?: string;
  emailInfo?: string;
  skillsArray?: any;
};

export function Portfolio(props: PortfolioProps) {
  return (
    <>
      <>
        {/* Header Profile */}
        <header className="profile container">
          <div className="profile_container grid">
            <div className="profile_data">
              <div className="profile_border">
                <div className="my_profile">
                  {/* Insert your image */}
                  <img
                    src={
                      props.profileImage ||
                      "https://www.pngitem.com/pimgs/m/579-5791541_beard-boy-logo-png-download-beard-logo-hd.png"
                    }
                    alt="Profile Picture"
                  />
                </div>
              </div>
              <h2 className="profile_name">
                {props.profileName || "Dimas Yusuf Qurohman"}
              </h2>
              <h3 className="profile_profession">
                {props.professiomName || "Front-End Developer"}
              </h3>
              <ul className="profile_social">
                <a
                  href={props.instaDetails || "https://www.instagram.com/"}
                  target="_blank"
                  className="profile_social_link"
                >
                  <i className="ri-instagram-line" />
                </a>
                <a
                  href={props.linkedinDetails || "https://www.linkedin.com/"}
                  target="_blank"
                  className="profile_social_link"
                >
                  <i className="ri-linkedin-box-line" />
                </a>
                <a
                  href={props.githubDetails || "https://github.com/"}
                  target="_blank"
                  className="profile_social_link"
                >
                  <i className="ri-github-line" />
                </a>
              </ul>
            </div>
            <div className="profile_info grid">
              {props.portfolioArray &&
                props.portfolioArray.map((element: any, index: any) => (
                  <div key={index} className="profile_info_group">
                    <h3 className="profile_info_number">
                      {element.infoNumber || "6"}
                    </h3>
                    <p className="profile_info_description">
                      {element.infoText || " Months of work"}
                    </p>
                  </div>
                ))}
            </div>
            <div className="profile_buttons">
              {/* Insert your CV */}
              <a href={props.cv || "/demo.pdf"} download="" className="button">
                Download CV <i className="ri-download-line" />
              </a>
              <div className="profile_buttons_small">
                {/* Insert your whatsapp */}
                <a
                  href={
                    props.whatsappInfo ||
                    "https://api.whatsapp.com/send/?phone=9999999999&text=Hello, i want to make a website!"
                  }
                  target="_blank"
                  className="button button_small button_gray"
                >
                  <i className="ri-whatsapp-line" />
                </a>
                {/* Insert your email */}
                <a
                  href={
                    props.emailInfo || "mailto: sourcesoftsolutions@gmail.com"
                  }
                  target="_blank"
                  className="button button_small button_gray"
                >
                  <i className="ri-mail-line" />
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Main */}
        <main className="main">
          <section className="filters container">
            {/* Filters Tabs */}
            <ul className="filters_content">
              <button className="filters_button">Skills</button>
            </ul>
            <div className="filters_sections">
              <div className="skills_content grid">
                {props.skillsArray &&
                  props.skillsArray.map((element: any, index: any) => (
                    <div key={index} className="skills_area">
                      <h3 className="skills_title">
                        {element.skillsTitle || "Front-end Developer"}
                      </h3>
                      <div className="skills_box">
                        <div className="skills_group">
                          <div className="skills_data">
                            <i className="ri-checkbox-circle-line" />
                            <div>
                              <h3 className="skills_name">
                                {element.skillsName || "HTML"}
                              </h3>
                              <span className="skills_level">
                                {element.skillsLevel || "Intermediate"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="footer container">
          <span className="footer_copy">
            {props.footercredits || "©Himanshu. All rights reserved"}
          </span>
        </footer>
      </>
    </>
  );
}

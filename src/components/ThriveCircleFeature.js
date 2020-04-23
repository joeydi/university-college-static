import React from "react";

import foregroundImage from "../img/homepage-student-foreground.png";
import backgroundImage from "../img/homepage-student-background.jpg";

const ThriveCircleFeature = (props) => {
  return (
    <section className="thrive-circle-feature section-padding">
      <div className="container">
        <img className="background-image" src={backgroundImage} alt="" />
        <img className="foreground-image" src={foregroundImage} alt="" />
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="content-wrap">
              <h2>{props.heading}</h2>
              <p className="lead">{props.content}</p>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-3">
            {props.listItems.length && (
              <ul>
                {props.listItems.map((item, index) => (
                  <li key={index}>
                    {item.link ? <a href={item.link}>{item.title}</a> : <span>{item.title}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ThriveCircleFeature.defaultProps = {
  heading: "Enabling all learner types to design their own future",
  content:
    "At University College, we leverage technology in design of student services and products that improve educational attainment and have a national impact.",
  foregroundImage: foregroundImage,
  backgroundImage: backgroundImage,
  listItems: [
    { title: "First-Year Students", link: null },
    { title: "Transfer Students", link: null },
    { title: "Returning Adult Students", link: null },
    { title: "Upskilling Workers", link: null },
    { title: "Occasional Learners", link: null },
  ],
};

export default ThriveCircleFeature;

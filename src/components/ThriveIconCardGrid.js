import React from "react";
import { Link } from "react-router-dom";

import icon1 from "../img/icon-first-year-experience.svg";
import icon2 from "../img/icon-coop-internships.svg";
import icon3 from "../img/icon-learning-communities.svg";
import icon4 from "../img/icon-senior-capstones.svg";
import icon5 from "../img/icon-service-learning.svg";
import icon6 from "../img/icon-undergraduate-research-and-creative-activity.svg";

const ThriveIconCardGrid = (props) => {
  return (
    <section className="thrive-icon-card-grid">
      <div className="row gutter-4">
        {props.items.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Link to={item.link} className="icon-card d-flex flex-column align-items-center h-100">
              <div className="bg"></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.icon} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

ThriveIconCardGrid.defaultProps = {
  items: [
    {
      icon: icon1,
      title: "First Year Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/first-year-experience",
    },
    {
      icon: icon2,
      title: "Co-op Internships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/coop-internships",
    },
    {
      icon: icon3,
      title: "Learning Communities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/learning-communities",
    },
    {
      icon: icon4,
      title: "Senior Capstones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/senior-capstones",
    },
    {
      icon: icon5,
      title: "Service Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/service-learning",
    },
    {
      icon: icon6,
      title: "Undergraduate Research and Creative Activity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus a sodales mauris, vel gravida enim mauris velit tellus, faucibus vel nulla ac, commodo tempor diam.",
      link: "/thrive/undergraduate-research-and-creative-activity",
    },
  ],
};

export default ThriveIconCardGrid;

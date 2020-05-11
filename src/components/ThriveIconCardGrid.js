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
        "First year experience programs not only influence academic success, but they also drive emotional support and connections that are key to student success as a whole throughout a college education.",
      link: "/thrive/first-year-experience",
    },
    {
      icon: icon2,
      title: "Co-op Internships",
      description:
        "Co-ops are closely supervised internships or practicums which brings work experience into a learner’s academic program.",
      link: "/thrive/coop-internships",
    },
    {
      icon: icon3,
      title: "Learning Communities",
      description:
        "Learning communities are groups of learners who share common academic goals and work closely together in varying ways, whether it’s taking multiple courses together as a cohort, living in the same locations, or participating in the same general academic activities.",
      link: "/thrive/learning-communities",
    },
    {
      icon: icon4,
      title: "Senior Capstones",
      description:
        "Spanning everything from a thesis to a performance to an art exhibit, capstones are culminating experiences, usually in senior year, that bring together the full wealth of a learner’s experiences.",
      link: "/thrive/senior-capstones",
    },
    {
      icon: icon5,
      title: "Service Learning",
      description:
        "Learners connect course concepts to real world immersive activities through community engagement, developing perspectives and strategies in applying their skills and knowledge to the world.",
      link: "/thrive/service-learning",
    },
    {
      icon: icon6,
      title: "Undergraduate Research and Creative Activity",
      description:
        "ASU undergraduates receive many opportunities to conduct research or creative work to produce original scholarly results, often with opportunities for funding, stipends, and with specialized faculty support.",
      link: "/thrive/undergraduate-research-and-creative-activity",
    },
  ],
};

export default ThriveIconCardGrid;

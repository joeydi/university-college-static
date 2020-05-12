import React from "react";

import iconStatGrowth from "../img/icon-stat-growth.svg";

const ThriveTextStats = ({ style, content, stats }) => {
  return (
    <section className="thrive-text-stats section-margin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="lead" style={style}>
              {content}
            </div>
          </div>
        </div>

        <div className="row mt-60 justify-content-around">
          {stats.map((item, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="stat text-center">
                {item.icon && <img className="stat-icon" src={item.icon} alt="" />}
                {item.number && <strong className="stat-number">{item.number}</strong>}
                <div className="stat-description">
                  {item.description}
                  {item.source && (
                    <dl className="stat-source">
                      <dt>Source</dt>
                      <dd>{item.source}</dd>
                    </dl>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ThriveTextStats.defaultProps = {
  style: {
    textAlign: "center",
    fontWeight: "600",
  },
  content:
    "University College connects the dots for diverse learner journeys, leveraging technology to personalize learning experiences and support undergraduate student experiences to help them thrive.",
  stats: [
    {
      number: "28%",
      description: "of students will drop out in their first year at university",
    },
    {
      icon: iconStatGrowth,
      description: "of first year students leave for financial reasons",
    },
    {
      number: "89%",
      description: "of low-income students leave before attaining a degree",
    },
    {
      number: "$21k",
      description: "Dropouts earn $21k less on average than graduates",
    },
  ],
};

export default ThriveTextStats;

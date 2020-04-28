import React from "react";

const ThriveTextStats = ({ style, content, stats }) => {
  return (
    <section className="thrive-text-stats section-margin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
          <div className="lead" style={style}>{content}</div>
          </div>
        </div>

        <div className="row mt-60">
          {stats.map((item, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="stat text-center">
                <strong className="stat-number">{item.number}</strong>
                <p className="stat-description">{item.description}</p>
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
      number: "51%",
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

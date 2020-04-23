import React from "react";

const ThriveText = ({ style, content }) => {
  return (
    <section className="thrive-text section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div style={style}>{content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

ThriveText.defaultProps = {
  style: {
    textAlign: "center",
    fontWeight: "600",
  },
  content:
    "University College connects the dots for diverse learner journeys, leveraging technology to personalize learning experiences and support undergraduate student experiences to help them thrive.",
};

export default ThriveText;

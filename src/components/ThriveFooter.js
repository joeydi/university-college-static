import React from "react";

const ThriveFooter = ({ heading, description }) => {
  return (
    <section className="thrive-footer section-padding bg-lighter-grey">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h2>{heading}</h2>
            <p class="font-weight-bold mb-0">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

ThriveFooter.defaultProps = {
  heading: "A New American University",
  description:
    "ASU is a comprehensive public research university, measured not by whom it excludes, but by whom it includes and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.",
};

export default ThriveFooter;

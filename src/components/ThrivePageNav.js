import React from "react";

const ThrivePageNav = ({previous, next}) => {
  return (
    <section className="thrive-page-nav">
      <div className="container">
        <div className="row gutter-4">
          <div className="col-md-6">
            Back
          </div>
          <div className="col-md-6">
            Next
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThrivePageNav;

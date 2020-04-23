import React from "react";

import { ReactComponent as HeaderBackground } from "../img/thrive-header-bg.svg";

const ThriveHeader = ({ heading }) => {
  return (
    <section className="thrive-header">
      <HeaderBackground />
      <div className="container text-center">
        <h1>
            <span>{heading}</span>
        </h1>
      </div>
    </section>
  );
};

ThriveHeader.defaultProps = {
  heading: "Thrive at ASU",
};

export default ThriveHeader;

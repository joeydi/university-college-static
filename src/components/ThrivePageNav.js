import React from "react";
import { Link } from "react-router-dom";

import arrowLeft from "../img/arrow-left.svg";
import arrowRight from "../img/arrow-right.svg";

const ThrivePageNav = ({ previous, next }) => {
  return (
    <section className="thrive-page-nav">
      <div className="row gutter-4">
        <div className="col-6">
          <Link
            to={`/thrive/${previous.slug}`}
            className="page-nav page-nav-previous py-40 py-md-80 py-xl-100 h-100">
            <div className="p-30 p-md-40 mx-auto w-100" style={{ maxWidth: "340px" }}>
              <img className="page-nav-arrow" src={arrowLeft} alt="" />
              <span className="h2 d-block mb-5">Back</span>
              <span className="lead font-weight-medium">{previous.heading}</span>
            </div>
            <img className="page-nav-bg" src={previous.image} alt="" />
          </Link>
        </div>
        <div className="col-6">
          <Link
            to={`/thrive/${next.slug}`}
            className="page-nav page-nav-next text-right py-40 py-md-80 py-xl-100 h-100">
            <div className="p-30 p-md-40 mx-auto w-100" style={{ maxWidth: "340px" }}>
              <img className="page-nav-arrow" src={arrowRight} alt="" />
              <span className="h2 d-block mb-5">Next</span>
              <span className="lead font-weight-medium">{next.heading}</span>
            </div>
            <img className="page-nav-bg" src={next.image} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThrivePageNav;

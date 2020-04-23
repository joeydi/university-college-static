import React from "react";
import widont from 'widont';

import { ReactComponent as HeaderBackground } from "../img/thrive-photo-header-bg.svg";
import defaultPhoto from "../img/homepage-header-photo.png";

const ThrivePhotoHeader = ({ heading, subheading, photo, photoAlt }) => {
  return (
    <section className="thrive-photo-header">
      <HeaderBackground />
      <img src={photo} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-10 col-lg-8">
            <p>{heading}</p>
            <h1>
              <span>{widont(subheading)}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

ThrivePhotoHeader.defaultProps = {
  heading: "University College",
  subheading: "The hub for learner success",
  photo: defaultPhoto,
  photoAlt: "Photo of college graduate in cap and gown",
};

export default ThrivePhotoHeader;

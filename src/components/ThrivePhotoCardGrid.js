import React from "react";

const ThrivePhotoCardGrid = (props) => {
  return (
    <section className="thrive-photo-card-grid section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <h2>{props.heading}</h2>
            <p className="lead">{props.subheading}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

ThrivePhotoCardGrid.defaultProps = {
  heading: "The toolkit of the 21st-century learner",
  subheading:
    "An adaptive hub of lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mauris vel posuere porttitor. Ut vel ex tellus. Nunc placerat et sem eu iaculis. Nullam viverra, turpis nec vestibulum sollicitudin.",
  items: [
    { image: "", title: "", link: "" },
    { image: "", title: "", link: "" },
    { image: "", title: "", link: "" },
    { image: "", title: "", link: "" },
    { image: "", title: "", link: "" },
    { image: "", title: "", link: "" },
  ],
};

export default ThrivePhotoCardGrid;

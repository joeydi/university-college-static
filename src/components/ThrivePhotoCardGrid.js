import React from "react";

import arrowUp from "../img/arrow-up.svg";

import image1 from "../img/american-indian-student-support-services.jpg";
import image2 from "../img/first-year-success-center.jpg";
import image3 from "../img/the-lead-program.jpg";
import image4 from "../img/university-academic-success-programs.jpg";
import image5 from "../img/success-courses.jpg";
import image6 from "../img/experiential-learning-network.jpg";
import image7 from "../img/major-and-career-exploration.jpg";

const ThrivePhotoCardGrid = (props) => {
  return (
    <section className="thrive-photo-card-grid section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-40 mb-md-60">
          <div className="col-md-10 col-lg-9">
            <h2>{props.heading}</h2>
            <p className="lead">{props.subheading}</p>
          </div>
        </div>

        <div className="row gutter-10">
          {props.items.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-10" key={index}>
              <a href={item.link} className="photo-card">
                <div className="photo-card-content">
                  <strong>{item.title} <img className="arrow" src={arrowUp} alt="" /></strong>
                  <span>{item.description}</span>
                </div>
                <img src={item.image} alt="" />
              </a>
            </div>
          ))}
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
    {
      image: image1,
      title: "American Indian Student Support Services",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image2,
      title: "First-Year Success Center",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image3,
      title: "The LEAD Program",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image4,
      title: "University Academic Success Programs",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image5,
      title: "Success Courses",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image6,
      title: "Experiential Learning Network",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
    {
      image: image7,
      title: "Major and Career Exploration",
      description:
        "Magna nulla ea esse incididunt nostrud cillum do in adipisicing pariatur irure dolor nostrud aute.",
      link: "",
    },
  ],
};

export default ThrivePhotoCardGrid;

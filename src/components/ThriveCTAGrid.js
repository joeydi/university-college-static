import React from "react";

import icon1 from "../img/icon-learn-to-thrive.svg";
import icon2 from "../img/icon-get-started.svg";
import icon3 from "../img/icon-more-information.svg";

const ThriveCTAGrid = (props) => {
  return (
    <section className="thrive-cta-grid section-padding bg-lighter-grey">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="row justify-content-center">
              {props.items.map((item, index) => (
                <div className="col-md-4 mb-30 mb-md-0 text-center" key={index}>
                  <img src={item.icon} alt="" />
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.description}</p>
                  <p>
                    <a href="{item.link.url}" className="btn btn-primary">
                      {item.link.title}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ThriveCTAGrid.defaultProps = {
  items: [
    {
      icon: icon1,
      title: "Learn to Thrive",
      description: "Your journey to ASU begins here",
      link: {
        title: "Schedule a Visit",
        url: "",
      },
    },
    {
      icon: icon2,
      title: "Get started",
      description: "Find out what you need to apply",
      link: {
        title: "How and Where to Apply",
        url: "",
      },
    },
    {
      icon: icon3,
      title: "Want more information?",
      description: "We have answers",
      link: {
        title: "Request Information",
        url: "",
      },
    },
  ],
};

export default ThriveCTAGrid;

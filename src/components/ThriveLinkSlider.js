import React, { Component } from "react";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

import arrowRight from "../img/arrow-right.svg";

class ThriveLinkSlider extends Component {
  componentDidMount() {
    this.flickity = new Flickity(this.flickityEl, {
      arrowShape:
        "M76.536 98.536a5 5 0 01-6.6.415l-.472-.415-45-45a5 5 0 01-.415-6.6l.415-.472 45-45a5 5 0 017.487 6.6l-.415.472L35.075 50l41.46 41.464a5 5 0 01.416 6.6l-.415.472z",
      cellAlign: "left",
      pageDots: false,
    });
  }

  render() {
    return (
      <section className="thrive-link-slider section-padding bg-lighter-grey">
        <div className="container">
          <div className="row justify-content-center text-center mb-40 mb-md-60">
            <div className="col-md-10 col-lg-9">
              <h2>{this.props.heading}</h2>
              <p className="lead">{this.props.subheading}</p>
            </div>
          </div>

          <div className="links" ref={(el) => (this.flickityEl = el)}>
            {this.props.items.map((item, index) => (
              <a href={item.url} key={index}>
                <span className="bg"></span>
                <span className="text">
                  {item.title}
                  {"\u00A0"}
                  <img src={arrowRight} alt="" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

ThriveLinkSlider.defaultProps = {
  heading: "Helping students thrive",
  subheading:
    "Personalized learning experiences enable students to lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mauris vel posuere porttitor. Ut vel ex tellus. Nunc placerat et sem eu iaculis. Nullam viverra, turpis nec.",
  items: [
    {
      title: "First Year Experience",
      url: "/thrive/first-year-experience",
    },
    {
      title: "Co-op Internships",
      url: "/thrive/coop-internships",
    },
    {
      title: "Learning Communities",
      url: "/thrive/learning-communities",
    },
    {
      title: "Senior Capstones",
      url: "/thrive/senior-capstones",
    },
    {
      title: "Service Learning",
      url: "/thrive/service-learning",
    },
    {
      title: "Undergraduate Research and Creative Activity",
      url: "/thrive/undergraduate-research-and-creative-activity",
    },
  ],
};

export default ThriveLinkSlider;

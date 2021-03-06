import React, { Component } from "react";

import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

class ThriveLinkSlider extends Component {
  componentDidMount() {
    this.flickity = new Flickity(this.sliderEl, {
      arrowShape:
        "M76.536 98.536a5 5 0 01-6.6.415l-.472-.415-45-45a5 5 0 01-.415-6.6l.415-.472 45-45a5 5 0 017.487 6.6l-.415.472L35.075 50l41.46 41.464a5 5 0 01.416 6.6l-.415.472z",
      cellAlign: "left",
      pageDots: false,
    });

    // Wrap the last word in a span, so we can prevent the arrow from wrapping to a new line
    this.sliderEl.querySelectorAll('.text').forEach(item => {
      const text = item.innerText.trim();
      const lastWordIndex = text.lastIndexOf(' ');
      item.innerHTML = `${text.slice(0, lastWordIndex)} <span class="arrow-after">${text.slice(lastWordIndex)}</span>`;
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

          <div className="links" ref={(el) => (this.sliderEl = el)}>
            {this.props.items.map((item, index) => (
              <a href={item.url} key={index}>
                <span className="bg"></span>
                <span className="text">
                  {item.title}
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
    "The ingredients to learner success can be found in the classroom and beyond. ASU is committed to helping every individual Sun Devil thrive through various facets of the learner experience. Explore these areas and see why ASU is a national leader for supporting student success.",
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

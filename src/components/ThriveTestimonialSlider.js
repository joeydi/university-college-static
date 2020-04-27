import React, { Component } from "react";

import Flickity from "flickity";
import "flickity-imagesloaded";
import "flickity/dist/flickity.min.css";

import { ReactComponent as SliderBackground } from "../img/thrive-testimonials-bg.svg";
import testimonailPhoto from "../img/testimonial-photo-1.jpg";
import quotationMark from "../img/quotation-mark.svg";

class ThriveTestimonialSlider extends Component {
  componentDidMount() {
    this.flickity = new Flickity(this.flickityEl, {
      arrowShape:
        "M73.248.312a1.064 1.064 0 011.593 1.404l-.089.1L26.57 50l48.183 48.184c.384.383.413.987.089 1.404l-.089.1a1.064 1.064 0 01-1.404.089l-.1-.089-48.936-48.936a1.064 1.064 0 01-.089-1.404l.089-.1L73.248.312z",
      pageDots: false,
      wrapAround: true,
      imagesLoaded: true,
    });
  }

  render() {
    return (
      <section className="thrive-testimonial-slider section-padding">
        <SliderBackground />
        <div className="slider" ref={(el) => (this.flickityEl = el)}>
          {this.props.items.map((item, index) => (
            <div className="testimonial" key={index}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-5">
                    <blockquote>
                      <img className="quotation-mark" src={quotationMark} alt="" />
                      <p>{item.quote}</p>
                      <cite>{item.citation}</cite>
                    </blockquote>
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <img className="testimonial-photo" src={testimonailPhoto} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

ThriveTestimonialSlider.defaultProps = {
  items: [
    {
      quote:
        "One of the biggest things is having someone there to talk to and bounce around this concept of ‘It’s OK you feel this way and we’re all in this together.",
      citation: "Muneeza Rashid, biochemistry major",
      photo: testimonailPhoto,
    },
    {
      quote:
        "One of the biggest things is having someone there to talk to and bounce around this concept of ‘It’s OK you feel this way and we’re all in this together.",
      citation: "Muneeza Rashid, biochemistry major",
      photo: testimonailPhoto,
    },
    {
      quote:
        "One of the biggest things is having someone there to talk to and bounce around this concept of ‘It’s OK you feel this way and we’re all in this together.",
      citation: "Muneeza Rashid, biochemistry major",
      photo: testimonailPhoto,
    },
  ],
};

export default ThriveTestimonialSlider;

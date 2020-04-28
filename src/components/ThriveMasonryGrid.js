import React, { Component } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

class ThriveMasonryGrid extends Component {
  componentDidUpdate() {
    const masonry = new Masonry(this.masonryEl, {
      itemSelector: ".grid-item",
      percentPosition: true,
    });

    imagesLoaded(this.masonryEl).on("progress", () => {
      masonry.layout();
    });
  }

  render() {
    return (
      <section className="thrive-masonry-grid section-margin">
        <div className="container">
          <div className="row grid" ref={(el) => (this.masonryEl = el)}>
            {this.props.cards.map((card, index) => (
              <div key={index} className="grid-item col-sm-6 col-lg-4 mb-20">
                {card.component(card)}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ThriveMasonryGrid;

import React from "react";

const ThriveMasonryGrid = ({ cards }) => {
  return (
    <section className="thrive-masonry-grid section-margin">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-20">{card.component(card)}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThriveMasonryGrid;

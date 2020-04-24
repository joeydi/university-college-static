import React from "react";

import image1 from "../img/recent-news-article-1.jpg";
import image2 from "../img/recent-news-article-2.jpg";
import image3 from "../img/recent-news-article-3.jpg";

const ThriveRecentNews = (props) => {
  return (
    <section className="thrive-recent-news section-padding">
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="row my-40 my-md-60">
          {props.items.map((item, index) => (
            <div className="col-md-4 mb-30 mb-md-0" key={index}>
              <div className="excerpt">
                <a href="/">
                  <picture className="aspect-landscape">
                    <img src={item.image} alt="" />
                  </picture>
                </a>
                <h4>
                  <a href="/">{item.title}</a>
                </h4>
                <p>{item.date}</p>
                {item.excerpt}
              </div>
            </div>
          ))}
        </div>
          <a className="archive-link" href={props.archive.link}>{props.archive.title}</a>
      </div>
    </section>
  );
};

ThriveRecentNews.defaultProps = {
  heading: "Recent News",
  archive: {
    link: "",
    title: "Read more news",
  },
  items: [
    {
      image: image1,
      date: "September 10, 2019",
      title: "Highly ranked for ‘first-year experience,’ ASU provides personalized support",
      excerpt: (
        <>
          <p>When Audrey Ruiz first came to Arizona State University, she was terrified.</p>
          <p>“I was so intimidated by this huge public university,” she said.</p>
        </>
      ),
    },
    {
      image: image2,
      date: "August 16, 2019",
      title: "New ASU online program will train adults to help foster youths prep for college",
      excerpt: (
        <em>
          <strong>Editor’s note:</strong> This story is being highlighted in ASU Now’s year in
          review.
        </em>
      ),
    },
    {
      image: image3,
      date: "July 12, 2019",
      title: "Sparking the indigenous imagination",
      excerpt: (
        <p>
          Arizona State University history alumnus Kino Reed regularly teaches O’odham cultural
          studies and social studies at Salt River High School near Scottsdale, Arizona.
        </p>
      ),
    },
  ],
};

export default ThriveRecentNews;

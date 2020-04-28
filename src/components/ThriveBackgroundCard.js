import React from "react";

const ThriveBackgroundCard = (props) => {
  return (
    <a className="thrive-background-card" href={props.link} target="noopener noreferrer">
        <span className="eyebrow"><span>{props.title}</span></span>
        <div className="content" dangerouslySetInnerHTML={{__html: props.content}} />
        <img className="bg" src={props.image} alt=""/>
    </a>
  );
};

ThriveBackgroundCard.defaultProps = {
    title: "VIP Freshmen Coaching",
    content: "Free academic support, information, skill development and advocacy.",
    image: "http://www.fillmurray.com/360/480",
    link: "/",
};

export default ThriveBackgroundCard;

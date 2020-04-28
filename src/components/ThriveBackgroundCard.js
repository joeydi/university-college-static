import React from "react";

import { ReactComponent as ArrowRight } from "../img/arrow-right.svg";

const ThriveBackgroundCard = (props) => {
  return (
    <a className="thrive-background-card" href={props.link} target="noopener noreferrer">
        <span className="eyebrow"><span>{props.title}</span></span>
        <div className="content" dangerouslySetInnerHTML={{__html: props.content}} />
        <img className="bg" src={props.image} alt=""/>
        <ArrowRight className="arrow" />
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

import React from "react";

import { ReactComponent as ArrowRight } from "../img/arrow-right.svg";

const ThriveGoldCard = (props) => {
  return (
    <a className="thrive-gold-card" href={props.link} target="noopener noreferrer">
        <span className="eyebrow"><span>{props.title}</span></span>
        <div className="content" dangerouslySetInnerHTML={{__html: props.content}} />
        <ArrowRight className="arrow" />
    </a>
  );
};

ThriveGoldCard.defaultProps = {
    title: "VIP Freshmen Coaching",
    content: "Free academic support, information, skill development and advocacy.",
    image: "http://www.fillmurray.com/360/480",
    link: "/",
};

export default ThriveGoldCard;

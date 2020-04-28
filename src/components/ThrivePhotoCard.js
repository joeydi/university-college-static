import React from "react";

const ThrivePhotoCard = (props) => {
  return (
    <a className="thrive-photo-card" href={props.link} target="noopener noreferrer">
        <span className="eyebrow"><span>{props.title}</span></span>
        <div className="content" dangerouslySetInnerHTML={{__html: props.content}} />
        <img className="bg" src={props.image} alt=""/>
    </a>
  );
};

ThrivePhotoCard.defaultProps = {
    title: "VIP Freshmen Coaching",
    content: "Free academic support, information, skill development and advocacy.",
    image: "http://www.fillmurray.com/360/480",
    link: "/",
};

export default ThrivePhotoCard;

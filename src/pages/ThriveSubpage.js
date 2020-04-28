import React from "react";

import ThriveHeader from "../components/ThriveHeader";
import ThriveTextStats from "../components/ThriveTextStats";
import ThriveMasonryGrid from "../components/ThriveMasonryGrid";
import ThrivePageNav from "../components/ThrivePageNav";
import ThriveFooter from "../components/ThriveFooter";

import ThriveGoldCard from "../components/ThriveGoldCard";
import ThrivePhotoCard from "../components/ThrivePhotoCard";
import ThriveBackgroundCard from "../components/ThriveBackgroundCard";

import firstYearExperience from "../img/page-first-year-experience.jpg";
import coopInternships from "../img/page-coop-internships.jpg";
import learningCommunities from "../img/page-learning-communities.jpg";
import seniorCapstones from "../img/page-senior-capstones.jpg";
import serviceLearning from "../img/page-service-learning.jpg";
import undergraduateResearchAndCreativeActivity from "../img/page-undergraduate-research-and-creative-activity.jpg";

const pages = [
  {
    image: firstYearExperience,
    slug: "first-year-experience",
    heading: "First Year Experience",
    description:
      "First year experience programs not only influence academic success, but they also drive emotional support and connections that are key to student success as a whole throughout a college education.",
    cards: [
      {
        component: ThrivePhotoCard,
        title: "VIP Freshmen Coaching",
        content: "Free academic support, information, skill development and advocacy.",
        image: "http://www.fillmurray.com/360/480",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "VIP Freshmen Coaching",
        content: "Free academic support, information, skill development and advocacy.",
        image: "http://www.fillmurray.com/360/480",
        link: "/",
      },
      {
        component: ThriveBackgroundCard,
        title: "VIP Freshmen Coaching",
        content: "Free academic support, information, skill development and advocacy.",
        image: "http://www.fillmurray.com/360/480",
        link: "/",
      },
    ],
  },
  {
    image: coopInternships,
    slug: "coop-internships",
    heading: "Co-op Internships",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    image: learningCommunities,
    slug: "learning-communities",
    heading: "Learning Communities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    image: seniorCapstones,
    slug: "senior-capstones",
    heading: "Senior Capstones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    image: serviceLearning,
    slug: "service-learning",
    heading: "Service Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    image: undergraduateResearchAndCreativeActivity,
    slug: "undergraduate-research-and-creative-activity",
    heading: "Undergraduate Research and Creative Activity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
];

const ThriveSubpage = ({ match }) => {
  const pageIndex = pages.findIndex((page) => page.slug === match.params.slug);
  const page = pages[pageIndex];
  const previousPage = pageIndex === 0 ? pages[pages.length - 1] : pages[pageIndex - 1];
  const nextPage = pageIndex === pages.length - 1 ? pages[0] : pages[pageIndex + 1];

  return (
    page && (
      <>
        <ThriveHeader heading={page.heading} />
        <ThriveTextStats
          content={page.description}
          style={{ textAlign: "center", fontWeight: 300 }}
        />
        <ThriveMasonryGrid cards={page.cards} />
        <ThrivePageNav previous={previousPage} next={nextPage} />
        <ThriveFooter />
      </>
    )
  );
};

export default ThriveSubpage;

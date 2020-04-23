import React from "react";

import ThriveHeader from "../components/ThriveHeader";
import ThriveText from "../components/ThriveText";
import ThriveMasonry from "../components/ThriveMasonry";
import ThrivePageNav from "../components/ThrivePageNav";
import ThriveFooter from "../components/ThriveFooter";

const pages = [
  {
    slug: "first-year-experience",
    heading: "First Year Experience",
    description:
      "First year experience programs not only influence academic success, but they also drive emotional support and connections that are key to student success as a whole throughout a college education.",
  },
  {
    slug: "coop-internships",
    heading: "Co-op Internships",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    slug: "learning-communities",
    heading: "Learning Communities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    slug: "senior-capstones",
    heading: "Senior Capstones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    slug: "service-learning",
    heading: "Service Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
  {
    slug: "undergraduate-research-and-creative-activity",
    heading: "Undergraduate Research and Creative Activity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
  },
];

const ThriveSubpage = ({ match }) => {
  const pageIndex = pages.findIndex((page) => page.slug === match.params.slug),
    page = pages[pageIndex];

  return (
    page && (
      <>
        <ThriveHeader heading={page.heading} />
        <ThriveText content={page.description} style={{ textAlign: "center", fontWeight: 300 }} />
        <ThriveMasonry />
        <ThrivePageNav />
        <ThriveFooter />
      </>
    )
  );
};

export default ThriveSubpage;

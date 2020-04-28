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
        content: "<p>Free academic support, information, skill development and advocacy.</p>",
        image: "http://www.fillmurray.com/360/480",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Adulting 101",
        content:
          "<h2>Life can be hard but it’s all figureoutable.”</h2><p>Sun Devils turn to ASU Adulting 101, a student-run blog, to learn (some of) the things not taught in class.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "First-Year Success Center",
        content: "<h1>24k</h1><p>visits per semester, with centers on four campuses.</p>",
        image: "http://www.fillmurray.com/380/480",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Resources for First Year Engineering Students",
        content: "<p>Engineering-specific resources, guides, and FAQs.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Residential college community ",
        content:
          "<p>First-year Sun Devils live with others who share their major and career interests.</p>",
        image: "http://www.fillmurray.com/380/480",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Global Freshmen Academy",
        content:
          "<h2>Learn before paying</h2><p>By allowing students to learn, explore and complete courses before applying or paying for credit, the Global Freshman Academy reimagines the freshman year and reduces academic and monetary stress while opening a new path to a college degree for many students.</p>",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "First-year finances",
        content: "<p>Comprehensive resource page for first-year financial questions.</p>",
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
    cards: [],
  },
  {
    image: learningCommunities,
    slug: "learning-communities",
    heading: "Learning Communities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
    cards: [],
  },
  {
    image: seniorCapstones,
    slug: "senior-capstones",
    heading: "Senior Capstones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
    cards: [],
  },
  {
    image: serviceLearning,
    slug: "service-learning",
    heading: "Service Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
    cards: [],
  },
  {
    image: undergraduateResearchAndCreativeActivity,
    slug: "undergraduate-research-and-creative-activity",
    heading: "Undergraduate Research and Creative Activity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo mauris tempor malesuada feugiat. Suspendisse tincidunt mauris orci, vel placerat neque imperdiet eget.",
    cards: [],
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

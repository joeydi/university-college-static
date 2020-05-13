import React from "react";
import ReactDOMServer from "react-dom/server";

// Page section components
import ThriveHeader from "../components/ThriveHeader";
import ThriveTextStats from "../components/ThriveTextStats";
import ThriveMasonryGrid from "../components/ThriveMasonryGrid";
import ThrivePageNav from "../components/ThrivePageNav";
import ThriveFooter from "../components/ThriveFooter";

// Masonry grid card components
import ThriveGoldCard from "../components/ThriveGoldCard";
import ThrivePhotoCard from "../components/ThrivePhotoCard";
import ThriveBackgroundCard from "../components/ThriveBackgroundCard";

// Page featured images
import firstYearExperience from "../img/page-first-year-experience.jpg";
import coopInternships from "../img/page-coop-internships.jpg";
import learningCommunities from "../img/page-learning-communities.jpg";
import seniorCapstones from "../img/page-senior-capstones.jpg";
import serviceLearning from "../img/page-service-learning.jpg";
import undergraduateResearchAndCreativeActivity from "../img/page-undergraduate-research-and-creative-activity.jpg";

// Page content images
import { ReactComponent as QuotationMark } from "../img/quotation-mark.svg";

import firstYearExperience1 from "../img/card-first-year-experience-1.jpg";
import firstYearExperience2 from "../img/card-first-year-experience-2.jpg";
import firstYearExperience3 from "../img/card-first-year-experience-3.jpg";
import firstYearExperience4 from "../img/card-first-year-experience-4.jpg";
import firstYearExperienceResources from "../img/card-first-year-experience-resources.svg";

import coopInternships1 from "../img/card-coop-internships-1.jpg";
import coopInternshipsHandshake from "../img/card-coop-internships-handshake.png";

import learningCommunities1 from "../img/card-learning-communities-1.jpg";
import learningCommunities2 from "../img/card-learning-communities-2.jpg";
import learningCommunitiesSunshine from "../img/card-learning-communities-sunshine.svg";

import seniorCapstones1 from "../img/card-senior-capstones-1.jpg";
import seniorCapstones2 from "../img/card-senior-capstones-2.jpg";

import serviceLearning1 from "../img/card-service-learning-1.jpg";
import serviceLearning2 from "../img/card-service-learning-2.jpg";
import serviceLearningLightbulb from "../img/card-service-learning-lightbulb.svg";

import undergraduateResearchAndCreativeActivity1 from "../img/card-undergraduate-research-and-creative-activity-1.jpg";
import undergraduateResearchAndCreativeActivity2 from "../img/card-undergraduate-research-and-creative-activity-2.jpg";
import undergraduateResearchAndCreativeActivity3 from "../img/card-undergraduate-research-and-creative-activity-3.jpg";
import undergraduateResearchAndCreativeActivityLevels from "../img/card-undergraduate-research-and-creative-activity-levels.svg";

import iconStatChat from "../img/icon-stat-chat.svg";
import iconStatExposure from "../img/icon-stat-exposure.svg";
import iconStatGrades from "../img/icon-stat-grades.svg";
import iconStatGroup from "../img/icon-stat-group.svg";
import iconStatGrowth from "../img/icon-stat-growth.svg";
import iconStatHands from "../img/icon-stat-hands.svg";
import iconStatResearch from "../img/icon-stat-research.svg";
import iconStatStars from "../img/icon-stat-stars.svg";
import iconStatThumbsUp from "../img/icon-stat-thumbs-up.svg";
import iconStatTransform from "../img/icon-stat-transform.svg";

const pages = [
  {
    image: firstYearExperience,
    slug: "first-year-experience",
    heading: "First Year Experience",
    description:
      "First year experience programs not only influence academic success, but they also drive emotional support and connections that are key to student success as a whole throughout a college education.",
    stats: [
      {
        number: "28%",
        description: "of students will drop out in their first year at university.",
      },
      {
        number: "51%",
        description: "of first year students leave for financial reasons.",
      },
      {
        number: "89%",
        description: "of low-income students leave before attaining a degree.",
      },
      {
        number: "$21k",
        description: "Dropouts earn $21k less on average than graduates.",
      },
    ],
    cards: [
      {
        component: ThrivePhotoCard,
        title: "VIP Freshmen Coaching",
        content: "<p>Free academic support, information, skill development and advocacy.</p>",
        image: firstYearExperience1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Adulting 101",
        content: `<p>${ReactDOMServer.renderToString(
          <QuotationMark className="quotationMark" />
        )}</p><h2>Life can be hard but it’s all figureoutable.”</h2><p>Sun Devils turn to ASU Adulting 101, a student-run blog, to learn (some of) the things not taught in class.</p>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "First-Year Success Center",
        content: "<h1>24k</h1><p>visits per semester, with centers on four campuses.</p>",
        image: firstYearExperience2,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Resources for First Year Engineering Students",
        content: `<p class="text-center"><img src="${firstYearExperienceResources}" alt="" /></p><p>Engineering-specific resources, guides, and FAQs.</p>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Residential college community ",
        content:
          "<p>First-year Sun Devils live with others who share their major and career interests.</p>",
        image: firstYearExperience3,
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
        component: ThriveBackgroundCard,
        title: "First-year finances",
        content: "<p>Comprehensive resource page for first-year financial questions.</p>",
        image: firstYearExperience4,
        link: "/",
      },
    ],
  },
  {
    image: coopInternships,
    slug: "coop-internships",
    heading: "Co-op Internships",
    description:
      "Co-ops are closely supervised internships or practicums which brings work experience into a learner’s academic program. Learners benefit from these professional experiences, and get opportunities to apply their academic skills and knowledge in real-world settings.",
    stats: [
      {
        number: "60%",
        description:
          "of ASU undergraduate degree recipients graduate with practicum, internship, co-op, or clinical placement.",
      },
      {
        icon: iconStatGrowth,
        description:
          "Cooperative graduates profited from their cooperative experiences by acquiring more effective learning strategies, accruing greater knowledge, and adjusting to organizational life more effectively.",
        source: "Gardner, Philip D. & Kozlowski, Steven W. J. (1993)",
      },
      {
        icon: iconStatHands,
        description:
          "Students who have completed internships are significantly more likely to receive full‐time job offers than non‐interns, and more likely to receive higher starting salaries.",
        source: "Gault, J., Leach, E. and Duey, M. (2010)",
      },
    ],
    cards: [
      {
        component: ThriveGoldCard,
        title: "Handshake",
        content: `<p><img src="${coopInternshipsHandshake}" alt="" /></p><p>&nbsp;</p><h3>An online hub for all things career and internship.</h3>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Fulton Co-op",
        content:
          "<p>Co-operatives which complement classroom experiences with paid, practical work experience.</p>",
        image: coopInternships1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Watts College Co-ops",
        content:
          "<p>All new undergraduate students will have a solutions-based learning class requirement that immerses them in the community and challenges them to think critically about public service within the context of their chosen field.</p>",
        link: "/",
      },
    ],
  },
  {
    image: learningCommunities,
    slug: "learning-communities",
    heading: "Learning Communities",
    description:
      "Learning communities are groups of learners who share common academic goals and work closely together in varying ways, whether it’s taking multiple courses together as a cohort, living in the same locations, or participating in the same general academic activities. Learning communities enable learners to take their learning beyond the classroom while building strong relationships with faculty and fellow students.",
    stats: [
      {
        icon: iconStatGroup,
        description:
          "Students of disadvantaged backgrounds often lack the social and cultural capital to immerse into and benefit fully from university environments.",
        source: "(Forsyth & Furlong, 2003)",
      },
      {
        icon: iconStatGrades,
        description:
          "Students in learning communities had higher grade point averages, earned more hours, and were more satisfied with their college experiences.",
        source: "Baker, S., & Pomerantz, N. (2000)",
      },
      {
        icon: iconStatThumbsUp,
        description:
          "Participating in a learning community is positively linked to engagement as well as student self-reported outcomes and overall satisfaction with college.",
        source: "Zhao, C., Kuh, G.D. (2004).",
      },
    ],
    cards: [
      {
        component: ThrivePhotoCard,
        title: "The LEAD Program",
        content:
          "<p>Providing students with robust learning opportunities throughout their first year at ASU.</p>",
        image: learningCommunities1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Student Organizations",
        content: "<h1>300+</h1><p>academic clubs and organizations.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "First-Year Communities",
        content: "<p>Campus housing connects students who share academic interests.</p>",
        image: learningCommunities2,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Sustainability Science for Teachers",
        content:
          "<h2>SCN400</h2><p>Preparing preservice teachers with the knowledge, skills, and attitudes necessary to educate their future students regarding sustainability literacy.</p>",
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Student life",
        content: `<p><img src="${learningCommunitiesSunshine}" alt="" /></p><h1>300+</h1><p>sunny days per year.</p>`,
        link: "/",
      },
    ],
  },
  {
    image: seniorCapstones,
    slug: "senior-capstones",
    heading: "Senior Capstones",
    description:
      "Spanning everything from a thesis to a performance to an art exhibit, capstones are culminating experiences, usually in senior year, that bring together the full wealth of a learner’s experiences.",
    stats: [
      {
        number: "74%",
        description: "of ASU undergraduate degree recipients graduate with a capstone experience.",
      },
      {
        icon: iconStatChat,
        description:
          "Participation in senior capstones improves skills in writing, oral communication, project management, and research.",
      },
      {
        icon: iconStatTransform,
        description:
          "Senior capstones are “transformative learning experience because of their positive contributions to desired learning outcomes,” and a “high-impact practice”.",
        source: "(Kuh 2008)",
      },
      {
        icon: iconStatStars,
        description:
          "Completion of senior capstones demonstrate student mastery and practical application of their chosen field of study.",
      },
    ],
    cards: [
      {
        component: ThriveGoldCard,
        title: "InnovationSpace",
        content:
          "<h2>design + <br />engineering + <br />business + <br />sustainability</h2><p>Teams of top students from across the university research, develop, prototype and refine product concepts.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "BARRETT Thesis/Creative Project",
        content:
          "<p>Giving students the opportunity to work closely with faculty and advance knowledge in the discipline in a meaningful way.</p>",
        image: seniorCapstones1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "FURI Symposium",
        content: `<p>${ReactDOMServer.renderToString(
          <QuotationMark className="quotationMark" />
        )}</p><h3>FURI improved my confidence in my ability to both independently and collaboratively produce and prototype a novel product.”</h3>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "The Design School",
        content:
          "<h1>Top 20</h1><p>Our diverse programs are in the top 20 in the country and teach students to master their design disciplines.</p>",
        image: seniorCapstones2,
        link: "/",
      },
    ],
  },
  {
    image: serviceLearning,
    slug: "service-learning",
    heading: "Service Learning",
    description:
      "Service Learning is a key component of the learner experience. Learners connect course concepts to real world immersive activities through community engagement, developing perspectives and strategies in applying their skills and knowledge to the world.",
    stats: [
      {
        number: "27%",
        description: "Volunteering is associated with a 27% higher odds of employment.",
        source: "(Corporation for National and Community Service)",
      },
      {
        number: "82%",
        description:
          "Employers are 82% more likely to choose a candidate with volunteering experience.",
        source: "(Corporation for National and Community Service)",
      },
      {
        number: "$25.43",
        description:
          "Valued at $25.43 per hour, volunteering makes up a significant contributor to local and global communities.",
        source: "(Independent Sector)",
      },
    ],
    cards: [
      {
        component: ThrivePhotoCard,
        title: "University Service Learning",
        content: "<h1>100</h1><p>hours of community service paired with academics.</p>",
        image: serviceLearning1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "School of Sustainability ",
        content: `<p class="text-center"><img src="${serviceLearningLightbulb}" alt="" /></p><h3>Real World <br />Learning Experience</h3>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Global EPICS+",
        content: "<p>An engineering-based study abroad opportunity.</p>",
        image: serviceLearning2,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Watts College Co-ops",
        content:
          "<p>All new undergraduate students will have a solutions-based learning class requirement that immerses them in the community and challenges them to think critically about public service within the context of their chosen field.</p>",
        link: "/",
      },
    ],
  },
  {
    image: undergraduateResearchAndCreativeActivity,
    slug: "undergraduate-research-and-creative-activity",
    heading: "Undergraduate Research and Creative Activity",
    description:
      "Research is a linchpin of a learner’s university experience. ASU undergraduates receive many opportunities to conduct research or creative work to produce original scholarly results, often with opportunities for funding, stipends, and with specialized faculty support.",
    stats: [
      {
        number: "63%",
        description: "of ASU undergraduate degree recipients graduate with research experience",
      },
      {
        icon: iconStatExposure,
        description:
          "Many students discover their passion for research and specific subject areas through exposure to research as undergraduates.",
      },
      {
        number: "79%",
        description:
          "of employers want undergraduates to “complete a project prior to graduation that demonstrates their acquired knowledge and skills.”",
        source:
          "[From “It Takes More than a Major: Employer Priorities for College Learning and Student Success,” Association of American Colleges and Universities, 2013]",
      },
      {
        icon: iconStatResearch,
        description:
          "Undergraduate research provides students the opportunity to develop interdisciplinary, communication, and teamwork skills crucial to their careers.",
      },
    ],
    cards: [
      {
        component: ThriveGoldCard,
        title: "Barrett Honors Research ",
        content:
          "<h1>$750</h1><p>Barrett works with all ASU schools and colleges to identify and match students with research opportunities for up to $750 in research.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Fulton Undergraduate Research Initiative",
        content:
          "<p>Undergraduate students in the Fulton Schools of Engineering are highly encouraged to pursue a research project during their studies.</p>",
        image: undergraduateResearchAndCreativeActivity1,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "School of Life Sciences ",
        content:
          "<h3>SOLUR <br />program</h3><p>Promotes opportunities for undergraduates in the School of Life Sciences to participate in exciting biological research.</p>",
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Watts College ",
        content:
          "<p>Watts students work with faculty on current research with provided funds, a symposium, and scholarship awards.</p>",
        image: undergraduateResearchAndCreativeActivity2,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Sustainability Undergraduate Research",
        content: `<p class="text-center"><img src="${undergraduateResearchAndCreativeActivityLevels}" alt="" /></p><p>Sustainability students participate in three flexible levels of research experiences.</p>`,
        link: "/",
      },
      {
        component: ThrivePhotoCard,
        title: "Cronkite Research Fellows Program",
        content:
          "<p>Students work one-on-one with faculty on cutting-edge research for 10-15 hours a week and a stipend.</p>",
        image: undergraduateResearchAndCreativeActivity3,
        link: "/",
      },
      {
        component: ThriveGoldCard,
        title: "Handshake",
        content: `<p><img src="${coopInternshipsHandshake}" alt="" /></p><p>&nbsp;</p><p>A matchmaking system to connect students and faculty with similar research interests.</p>`,
        link: "/",
      },
    ],
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
          stats={page.stats}
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

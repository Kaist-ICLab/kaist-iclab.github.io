import Link from "@/components/Link";
import SectionLink from "@/components/SectionLink";
import announcements from "@data/announcements";
import { Icon } from "@iconify/react";
import ResearchProjectCard from "@/components/ResearchProjectCard";

const researchSteps = [
  {
    title: "Sense & Collect",
    description: "Capture behavioral and contextual data from smart devices.",
    icon: "material-symbols:sensors",
  },
  {
    title: "Explore & Analyze",
    description: "Model wellbeing states using data-driven methods.",
    icon: "icon-park-solid:market-analysis",
  },
  {
    title: "Act & Service",
    description: "Deliver personalized wellbeing interventions and services.",
    icon: "flowbite:badge-check-solid",
  },
];

const projects = [
  {
    title: "EnPULSE for Mobile and Wearable Computing",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/enpulse.png",
    description: "EnPULSE (Enabling Platform for User Logging & Sensing Environment) is an open-source platform for mobile and wearable health research, which helps researchers run and monitor in-the-wild studies with less engineering overhead.",
  },
  {
    title: "Digital Columbus & AI Interviewer",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/digital columbus.png",
    description: "Digital Columbus uses multi-agent AI to interpret longitudinal patient-generated data and support psychiatric prognostic reasoning, preserving evidence and uncertainty for clinician review. AI Interviewer gathers psychiatric histories and screens for risks before visits.",
  },
  {
    title: "Physical AI",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/physicalAI.png",
    description: "We develop Physical AI for factory operations by integrating Factory-VLM perception, anomaly detection, and factory knowledge to assess risks, prioritize responses, and support safe human-robot collaboration through HMI and multi-agent coordination.",
  },
  {
    title: "Meta-Scientist & AI Science Hub",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/meta scientist.png",
    description: "Meta-Scientist explores AI researcher clones for scholarly consultation, examining representation, reciprocity, and diversity. AI Science Hub investigates human digital twins as research participants, reviewing their construction, use, and validation.",
  },
  {
    title: "Mobile Agents",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/mobile agents.png",
    description: "We explore the mental model of older adults when interacting with a mobile agent, develop a language model specialized in understanding their utterances, and research on interactive methods for error recovery.",
  },
  {
    title: "Agentic AI Companion",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/agentic AI companion.png",
    description: "We explore agentic AI companions that sense daily context to deliver just-in-time adaptive interventions (JITAI) for well-being, while learning from user responses to remain personalized, safe, and non-intrusive.",
  },
  {
    title: "Emotion Labor",
    // href: "https://brunch.co.kr/@kaisticlab",
    image: "/researchProjects/emotion labor.png",
    description: "We focus on a real-time mental health management system for emotional labor workers, such as call center agents. It uses sensors to monitor and assess their physiological and perceived stress states to provide personalized mental health management.",
  },
];

const opportunities = [
  {
    title: "Internship",
    description:
      "Gain practical research experience by contributing to ongoing projects and exploring your interests.",
    action: "Explore internship",
    href: "https://brunch.co.kr/@kaisticlab/51",
  },
  {
    title: "Prospective Students",
    description:
      "Explore our projects and discover how your interests connect with the questions we study.",
    action: "Joining the lab",
    href: "https://brunch.co.kr/@kaisticlab/3",
  },
  {
    title: "Research Collaborators",
    description:
      "Connect around a research question, a study setting, or a system you would like to build together.",
    action: "Explore collaboration",
    href: "https://brunch.co.kr/@kaisticlab/63",
  },
];

export default function Home() {
  return (
    <div className="home-page not-format">
      <section className="home-container home-hero" aria-labelledby="hero-title">
        <div className="home-intro">
          <div>
            <h1 id="hero-title" className="home-title font-extrabold text-black pt-4">
              Human-centered AI
              <br />
              for health, wellbeing &amp; work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
              We combine mobile sensing, AI, and interactive systems to understand
              people and support them in everyday life.
            </p>
          </div>
          <div className="home-hero-actions flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <SectionLink href="#research-projects" className="home-action">Research Projects</SectionLink>
            <SectionLink href="#lab-news" className="home-action">Lab News</SectionLink>
            <SectionLink href="#join-collaborate" className="home-action home-action-primary">Join &amp; Collaborate</SectionLink>
          </div>
        </div>
        <ul className="home-research-steps flex min-w-0 flex-col justify-between gap-9 border-y border-gray-300 py-7">
          {researchSteps.map((step) => (
            <li key={step.title} className="flex items-center gap-6 px-2">
              <Icon icon={step.icon} className="home-research-icon shrink-0 text-blue-600" aria-hidden="true" />
              <div className="min-w-0">
                <h2 className="text-xl font-bold leading-tight text-black">{step.title}</h2>
                <p className="mt-1.5 font-normal leading-snug text-gray-500">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="/lab-overview.pdf"
          download="이의진_교수님_AI컴퓨팅_소개자료.pdf"
          className="home-download group flex items-center justify-end gap-2 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:gap-3"
        >
          <Icon icon="material-symbols:download" className="text-3xl" aria-hidden="true" />
          <span className="group-hover:underline">Download Lab Overview</span>
          <span className="rounded bg-blue-100 px-2 py-1 text-xs">PDF</span>
        </a>
      </section>

      <section id="research-projects" className="home-container" aria-labelledby="projects-title">
        <h2 id="projects-title" className="home-section-title">Research Projects</h2>
        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <ResearchProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="lab-news" className="home-container" aria-labelledby="news-title">
        <h2 id="news-title" className="home-section-title">Lab News</h2>
        <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
          {announcements.map((announcement) => (
            <li key={announcement.path} className="flex flex-col gap-3 px-4 py-6 text-lg text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <Link href={announcement.path} className="flex min-w-0 items-center gap-2 hover:text-blue-700">
                {announcement.pinned && <Icon icon="mdi:pin" className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />}
                <span>{announcement.title}</span>
              </Link>
              <time dateTime={announcement.created} className="shrink-0 font-light">{announcement.created}</time>
            </li>
          ))}
        </ul>
      </section>

      <section id="join-collaborate" aria-labelledby="collaborate-title">
        <div className="home-container">
          <h2 id="collaborate-title" className="home-section-title">Join &amp; Collaborate</h2>
        </div>
        <div className="home-collaboration-band mt-8">
          <div className="home-container grid gap-10 py-7 md:grid-cols-3 lg:gap-16">
            {opportunities.map((opportunity) => (
              <article key={opportunity.title} className="flex min-w-0 flex-col items-start lg:pr-12">
                <h3 className="text-2xl font-bold leading-tight text-black">{opportunity.title}</h3>
                <p className="mb-5 mt-4 flex-1 leading-snug text-black">{opportunity.description}</p>
                <Link href={opportunity.href} className="home-opportunity-action block w-full rounded-full border-[1.5px] bg-white px-3 py-2 text-center text-lg font-700 leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:text-sm xl:text-lg">
                  {opportunity.action} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

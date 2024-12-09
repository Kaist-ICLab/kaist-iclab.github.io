import Link from "@/components/Link";
import announcements from "@data/announcements";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Announcement: React.FC<{
  pinned: boolean,
  path: string,
  title: string,
  created: string,
}> = (announcement) => {
  return (
    <div className="not-format inline-flex gap-2 lg:flex-row justify-between items-center">
      <Link href={announcement.path} className={"not-format no-underline hover:no-underline " + (announcement.pinned ? "" : "ml-6")}>
        <h3 className="text-lg text-gray-700 line-clamp-1">
          {announcement.pinned &&
            <Icon icon="mdi:pin" className="float-left m-1 ml-0 h-5 w-5 text-gray-400" />
          }
          {announcement.title}
        </h3>
      </Link>
      <span className="hidden sm:block flex-shrink-0 text-base text-gray-600 font-light">{announcement.created}</span>
    </div>
  );
};

const Feature: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="mt-4">
    <Icon icon={icon} className="mx-auto mb-4 w-12 h-12 text-blue-600" />
    <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
    <p className="m-auto max-w-96 mb-4 text-base text-gray-500">
      {description}
    </p>
  </div>
)

const Home: React.FC = () => {
  return (
    <div className="m-auto w-full not-format flex flex-col gap-20 pt-12">
      <section id="hero">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="m-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 
              text-4xl md:text-5xl xl:text-6xl
              font-extrabold tracking-tight leading-none 
              text-black">
              Ubiquitous Computing to Support Wellbeing
            </h1>
            <p className="mb-6 lg:mb-8 
              md:text-lg lg:text-xl
              text-gray-500">
              Providing personalized wellbeing support through context-aware computing and machine learning, leveraging mobile, wearable, and IoT technologies.
            </p>
          </div>
          <div className="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/wordcloud.png"
              className="not-format lg:mt-0 w-full h-full object-contain"
              width={624}
              height={400}
              alt="The Wordcloud of Interactive Computing Lab"
            />
          </div>
        </div>
      </section>
      <section id="research-area" className="text-center">
        <h2 className="mb-4
             text-2xl md:text-3xl xl:text-4xl
             tracking-tight font-extrabold 
             text-black">
          Our Research Area
        </h2>
        <p className="mb-6 lg:mb-8 
            md:text-lg lg:text-xl 
            text-gray-500">
          Our research focuses on Human-Computer Interaction (HCI) and Ubiquitous Computing (UbiComp).
          <br />
          Major research areas include (1) Cognitive and Affective Computing, (2) IoT Data Science and Platform Research, and (3) Digital Health and Wellbeing Interventions.  We strive not only to make scholarly contributions but also to create a social impact by making our findings and services accessible.
          <br/>
          We are conducting research with an interest in all of the following steps.
        </p>
        <div className="mt-8 sm:mt-12 md:grid lg:grid-cols-3 sm:gap-12">
          <Feature
            title="Sense & Collect"
            icon="material-symbols:sensors"
            description="We work on sensing user behavior and contextual data using smartphones, wearables, and IoT devices"
          />
          <Feature
            title="Explore & Analyze"
            icon="icon-park-solid:market-analysis"
            description="We analyze the collected data to understand wellbeing states and build predictive models through machine learning"
           />
          <Feature
            title="Act & Service"
            icon="flowbite:badge-check-solid"
            description="We develop, evaluate, and deploy data-driven personalized wellbeing support services in the wild"
          />
        </div>
      </section>
      <section id="announcement" className="mb-20 text-center">
        <h2 className="mb-4
             text-2xl md:text-3xl xl:text-4xl
             tracking-tight font-extrabold 
             text-black">
          Announcement
        </h2>
        <div className="mx-auto mt-8 flex flex-col
          border-y px-4 py-5 gap-5">
          {announcements.map((announcement, idx) => <Announcement {...announcement} key={idx} />)}
        </div>
      </section>
    </div>
  );
}

export default Home
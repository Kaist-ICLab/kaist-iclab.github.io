"use client"

import Announcement from "@/components/Announcement";

const landing = {
  title: "Ubiquitous Computing for Emotional Supports",
  description: "Using mobile devices and wearables to provide emotional supports based on context-aware computing.",
  researhAreaDescription: "We are studying Human-Computer Interaction(HCI), especially affective computing on mobile devices. We always strive to make not only scholarly contributions but also social impact by making our findings and service available.",
  features: [{
    title: "Sense & Collect",
    description: "We work on sensing user behavior and contextual data through smartphones, wearables, and IoT devices.",
    icon: <>
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
    </>
  },
  {
    title: "Explore & Analyze",
    description: "We analyze the collected data to understand user behavior and detect users' emotional states.",
    icon: <><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></>
  }, {
    title: "Act & Service",
    description: "The goal is to provide data-driven emotional support solutions through a variety of services based on analytics and data collection.",
    icon: <><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></>
  }],
  announcements: [
    {
      title: "Recruiting Graduate Students and Interns",
      description: "We're looking for prospective students and interns",
      path: "#"
    },
    {
      date: "Jan 8th, 2024",
      title: "Seven Papers accepted to CHI 2024!",
      description: "The seven papers were accepted to CHI 2024! Please take a look",
      path: "#"
    },
  ]
}


const Home: React.FC = () => {
  return (
    <div className="m-auto w-full max-w-screen-xl bg-white dark:bg-gray-900">
      <section id="hero" className="not-format">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
              {landing.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {landing.description}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section id="research-area" className="not-format">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 sm:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Research Area</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {landing.researhAreaDescription}
          </p>
          <div className="mt-8 sm:mt-12 md:grid lg:grid-cols-3 sm:gap-12 GHTkY6_vcDBrE7v2PrzJ">
            {
              landing.features.map((feature, idx) => <div key={idx} className="mt-4">
                <svg className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  {feature.icon}
                </svg>
                <h3 className="mb-2 text-xl font-bold dark:text-white text-black">{feature.title}</h3>
                <p className="m-auto max-w-96 mb-4 text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>)
            }
          </div>
        </div>
      </section>
      <section id="announcement" className="bg-white dark:bg-gray-800 max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
        <h2 className="text-center">
          Announcement
        </h2>
        <div className="max-w-3xl px-4 pt-5 pb-8 gap-12 mx-auto mt-8 flex flex-col border-gray-200 border rounded-sm dark:border-gray-700">
          {landing.announcements.map((announcement, idx) => <Announcement {...announcement} key={idx} />)}
        </div>
      </section>
    </div>
  );
}

export default Home
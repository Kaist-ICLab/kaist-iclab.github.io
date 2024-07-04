"use client"


export default function Home() {
  return (
    <div className="m-auto w-full max-w-screen-xl mb-12 px-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Ubiquitous Computing for Emotional Supports
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Using mobile devices and wearables to provide emotional supports based on context-aware computing.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 sm:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Research Area</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            We are studying Human-Computer Interaction(HCI), especially Affective Computing on Mobile Devices.
            <br/>
            We always strive to make not only scholarly contributions but also social impact by making our findings and service available.
          </p>
          <div className="mt-8 sm:mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-12 GHTkY6_vcDBrE7v2PrzJ">
            <div className="mt-4">
              <svg className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Sense & Collect</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We work on sensing user behavior and contextual data through smartphones, wearables, and IoT devices.
              </p>
              {/* <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                Learn how to keep your funds safe <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a> */}
            </div>
            <div className="mt-4">
              <svg className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Explore & Analyze</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We analyze the collected data to understand user behavior and detect users' emotional states.
              </p>
              {/* <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                Learn how your crypto is covered <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a> */}
            </div>
            <div className="mt-4">
              <svg className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Act & Service</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The goal is to provide data-driven emotional support solutions through a variety of services based on analytics and data collection.
              </p>
              {/* <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                How to implement best practices <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-5 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Latest News
            </h2>
          </div>
          <div className="max-w-3xl p-1 mx-auto mt-8 dark:border-gray-700">
            <div className="pt-5 pb-8 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-light">Jan 8th, 2024</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Seven Papers accepted to CHI 2024!
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                The seven papers were accepted to CHI 2024! Please take a look
              </p>
              <a href="#" className="mt-2 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400">
                Read more <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </div>

            <div className="pt-5 pb-8 border-b border-gray-200 dark:border-gray-700">
              <p className=" text-sm text-gray-600 dark:text-gray-300 font-light">Jan 8th, 2024</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chapter 2: Designing for User Experience
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                This chapter explores the concept of user experience (UX) design and how it relates to the overall design
                process. It
                covers topics such as user research, usability testing, and user-centered design.
              </p>
              <a href="#" className="mt-2 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400">
                Read more <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </div>

            <div className="pt-5 pb-8 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-light">Jan 8th, 2024</p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chapter 3: Typography in Design
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                This chapter delves into the art and technique of typography, including the history and evolution of type, the
                basics of
                typographic hierarchy, and the use of typography in digital design.
              </p>
              <a href="#" className="mt-2 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400">
                Read more <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-32"></section>
    </div>
  );
}

"use client"

import Announcement from "@/components/Announcement";

const landing = {
  title: "Ubiquitous Computing for Emotional Supports",
  description: "Using mobile devices and wearables to provide emotional supports based on context-aware computing.",
  researhAreaDescription: "We are studying Human-Computer Interaction(HCI), especially affective computing on mobile devices. We always strive to make not only scholarly contributions but also social impact by making our findings and service available.",
  features: [{
    title: "Sense & Collect",
    description: "We work on sensing user behavior and contextual data through smartphones, wearables, and IoT devices.",
    icon: <svg viewBox="0 0 800 800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M649.528 301.001C636.436 268.083 616.347 238.083 589.251 211.001L645.984 154.183C688.126 196.353 717.164 243.958 733.086 297.001C742.814 329.319 747.694 363.65 747.722 400V400.094C747.709 453.236 737.316 502.053 716.539 546.545C699.819 582.52 676.328 615.67 646.075 646L589.158 589.09C609.934 568.301 626.576 545.815 639.072 521.636C658.008 485.02 667.462 444.506 667.441 400.092V400C667.484 364.511 661.519 331.512 649.528 301.001Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M549.516 251.547C563.216 265.336 574.612 280.094 583.703 295.819H583.797C601.686 326.753 610.625 361.417 610.617 399.819V400C610.611 439.869 601.005 475.747 581.794 507.639H581.705C572.836 522.223 561.958 535.981 549.061 548.911V548.817L548.972 548.911L492.055 492C495.759 488.175 499.183 484.266 502.33 480.273V480.18C520.811 457.255 530.084 430.525 530.153 400V399.819C530.123 363.978 517.459 333.403 492.148 308.092L549.153 251.001C549.283 251.175 549.403 251.356 549.516 251.547Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M352.858 352.455C365.892 339.408 381.65 332.894 400.137 332.909C418.655 332.894 434.444 339.408 447.506 352.455L447.598 352.547C460.587 365.59 467.072 381.348 467.053 399.819V400C467.028 418.434 460.511 434.161 447.506 447.183C447.459 447.225 447.431 447.289 447.415 447.364C434.347 460.289 418.592 466.742 400.136 466.73C381.672 466.744 365.942 460.258 352.947 447.273L352.856 447.183C339.87 434.187 333.355 418.487 333.308 400.092C333.308 399.998 333.308 399.909 333.308 399.817C333.289 381.4 339.747 365.67 352.675 352.636C352.73 352.583 352.79 352.523 352.858 352.455Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M189.477 399.819C189.467 397.247 189.499 394.705 189.569 392.183C191.308 337.301 211.795 290.242 251.03 251.001L307.945 307.911C282.606 333.278 269.967 363.914 270.031 399.819C270.031 399.911 270.031 400 270.031 400.094C270.008 404.095 270.161 408.037 270.486 411.911V412C273.002 442.762 285.489 469.4 307.945 491.911C308 491.969 308.06 492.028 308.128 492.092L251.12 549.003L251.03 548.911C210.035 507.834 189.517 458.228 189.477 400.094C189.477 400 189.477 399.909 189.477 399.819Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M55.3704 352C64.9344 276.313 97.8485 210.342 154.108 154.091L211.022 211.002C165.303 256.688 139.573 310.658 133.831 372.91C133.034 381.786 132.639 390.845 132.65 400.092C132.653 473.852 158.719 536.849 210.841 589.091L210.931 589.183L154.016 646.091L153.925 646C86.1766 578.096 52.3235 496.125 52.3672 400.092C52.3766 383.644 53.3766 367.611 55.3704 352Z" fill="currentColor" />
    </svg>

  },
  {
    title: "Explore & Analyze",
    description: "We analyze the collected data to understand user behavior and detect users' emotional states.",
    icon: <svg viewBox="0 0 662 628" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M417.333 200C518.585 200 600.667 282.081 600.667 383.333C600.667 420.722 589.474 455.497 570.257 484.491C569.191 486.099 569.382 488.241 570.747 489.606L659.133 577.992C660.695 579.554 660.695 582.087 659.133 583.649L617.649 625.133C616.087 626.695 613.554 626.695 611.992 625.133L523.606 536.747C522.241 535.382 520.099 535.191 518.49 536.257C489.497 555.474 454.722 566.667 417.333 566.667C316.081 566.667 234 484.586 234 383.333C234 282.081 316.081 200 417.333 200ZM417.333 266.667C352.9 266.667 300.667 318.9 300.667 383.333C300.667 447.767 352.9 500 417.333 500C481.766 500 534 447.767 534 383.333C534 318.9 481.766 266.667 417.333 266.667ZM196.982 366.665C199.311 366.665 201.144 368.646 201.013 370.971C200.783 375.063 200.667 379.184 200.667 383.333C200.667 398.788 202.285 413.864 205.361 428.403C205.895 430.928 203.991 433.336 201.41 433.336L4.66646 433.333C2.45734 433.333 0.666504 431.543 0.666504 429.333V370.667C0.666504 368.458 2.45734 366.667 4.66647 366.667L196.982 366.665ZM130 0C132.209 0 134 1.79086 134 4V329.333C134 331.542 132.209 333.333 130 333.333H37.9998C35.7907 333.333 33.9998 331.542 33.9998 329.333V4.00001C33.9998 1.79087 35.7907 0 37.9998 0H130ZM263.333 133.333C265.542 133.333 267.333 135.124 267.333 137.334L267.329 225.285C267.329 226.374 266.883 227.415 266.103 228.175C237.887 255.682 217.146 290.82 207.215 330.255C206.762 332.054 205.155 333.331 203.3 333.331L171.333 333.333C169.124 333.333 167.333 331.542 167.333 329.333V137.333C167.333 135.124 169.124 133.333 171.333 133.333H263.333ZM396.666 66.6667C398.876 66.6667 400.666 68.4575 400.666 70.6667L400.666 163.591C400.666 165.682 399.054 167.417 396.971 167.611C364.294 170.657 333.724 180.959 306.888 196.891C304.169 198.504 300.666 196.579 300.666 193.417L300.666 70.6666C300.666 68.4575 302.457 66.6667 304.666 66.6667H396.666ZM530 100C532.209 100 534 101.791 534 104L534.001 193.417C534.001 196.579 530.497 198.505 527.779 196.891C500.943 180.959 470.373 170.657 437.696 167.611C435.613 167.417 434.001 165.683 434.001 163.591L434 104C434 101.791 435.791 100 438 100H530Z" fill="currentColor" />
    </svg>

  }, {
    title: "Act & Service",
    description: "The goal is to provide data-driven emotional support solutions through a variety of services based on analytics and data collection.",
    icon: <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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
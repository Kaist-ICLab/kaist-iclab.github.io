import Announcement from "@/components/Announcement";
import { AnnouncementProp } from "@/types/post";
import { readMDXDir } from "@/utils/file";
import main from "@data/main";

const Home: React.FC = () => {
  const announcements = (readMDXDir("data/posts")
    .filter((post) => post.type === "announcement") as AnnouncementProp[])
    .sort((a, b)=> (a.pinned? -1: 1) - (b.pinned? -1: 1))

  return (
    <div className="m-auto w-full max-w-screen-xl bg-white dark:bg-gray-900">
      <section id="hero" className="not-format">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
              {main.title}
            </h1>
            <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {main.description}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section id="research-area" className="not-format mt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 sm:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Research Area</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {main.researhAreaDescription}
          </p>
          <div className="mt-8 sm:mt-12 md:grid lg:grid-cols-3 sm:gap-12">
            {
              main.features.map((feature, idx) => <div key={idx} className="mt-4">
                <svg className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  {feature.icon}
                </svg>
                <h3 className="mb-2 text-xl font-bold dark:text-white text-black">{feature.title}</h3>
                <p className="m-auto max-w-96 mb-4 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>)
            }
          </div>
        </div>
      </section>
      <section id="announcement" className="mt-10 bg-white dark:bg-gray-900 max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
        <h2 className="text-center">
          Announcement
        </h2>
        <div className="border-y px-4 pt-5 pb-8 gap-5 mx-auto mt-8 flex flex-col">
          {announcements.map((announcement, idx) => <Announcement {...announcement} key={idx} />)}
        </div>
      </section>
    </div>
  );
}

export default Home
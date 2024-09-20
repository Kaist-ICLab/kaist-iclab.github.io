import Announcement from "@/components/Announcement";
import { AnnouncementProp } from "@/types/post";
import { readMDXDir } from "@/utils/file";
import main from "@data/main";
import Image from "next/image";


const announcements = [
  {
    type: "news",
    writer: 'UichinLee',
    title: '석박사&인턴모집: Prospective Students',
    created: '2023-11-13',
    lastModified: '2023-11-13',
    tags: ['대학원'],
    image: 'posts/00003_001.png',
    publish: true,
    pinned: true,
    content: '\n' +
      '# MS & PhD Programs\n' +
      '\n' +
      "We're looking for MS or PhD students for Fall 2024. If you're interested in pursuing MS or PhD please send an email to Prof. Lee (uclee@kaist.ac.kr) — please attach a short description of your interests, a transcript, and a resume. \n" +
      '\n' +
      '2024년도 석사 또는 박사과정 학생 선발합니다. (KAIST 장학생 및 국비로 선발 가능). 실험실에 관심이 있는 학생은 관심사, 성적표, 레주메를 이메일로 보내주세요. 2024년도 봄학기는 선발이 완료가 되서, 가을학기 입학 대상 학생을 고려하고 있습니다. \n' +
      '\n' +
      '# Internship Programs\n' +
      '\n' +
      "We're looking for research interns for Winter 2024. \n" +
      '\n' +
      'Deadline: (Extended) Monday, April 29, 2024 \n' +
      '\n' +
      'Internship Period: July 1-August 23, 2024\n' +
      '\n' +
      'Please check out our “Call for Interns” and submit your application via the Google form in the slides.\n' +
      '\n' +
      '2024년도 여름방학 학부생 인턴을 모집합니다. 관심있는 학생은 슬라이드에 있는 주제를 참고하셔서 온라인 신청해 주시기 바랍니다. 인턴십 토픽은 아래서 확인 가능합니다. \n' +
      '\n' +
      '### Summer 2024 Internship Topics\n' +
      '\n' +
      '[**KAIST ICLab Summer 2024 Interns - Topics**](https://docs.google.com/presentation/d/14725ju9B4f71FHOlpxqstk8ejpGCGfqBIlrbHFWjjXc/edit?usp=sharing)\n' +
      '\n' +
      '![](/posts/00003_001.png)  \n' +
      '\n' +
      '\n' +
      '\n',
    text: 'MS & PhD Programs\n' +
      '\n' +
      "We're looking for MS or PhD students for Fall 2024. If you're interested in pursuing MS or PhD please send an email to Prof. Lee (uclee@kaist.ac.kr) — please attach a short description of your interests, a transcript, and a resume.\n" +
      '\n' +
      '2024년도 석사 또는 박사과정 학생 선발합니다. (KAIST 장학생 및 국비로 선발 가능). 실험실에 관심이 있는 학생은 관심사, 성적표, 레주메를 이메일로 보내주세요. 2024년도 봄학기는 선발이 완료가 되서, 가을학기 입학 대상 학생을 고려하고 있습니다.\n' +
      '\n' +
      'Internship Programs\n' +
      '\n' +
      "We're looking for research interns for Winter 2024.\n" +
      '\n' +
      'Deadline: (Extended) Monday, April 29, 2024\n' +
      '\n' +
      'Internship Period: July 1-August 23, 2024\n' +
      '\n' +
      'Please check out our “Call for Interns” and submit your application via the Google form in the slides.\n' +
      '\n' +
      '2024년도 여름방학 학부생 인턴을 모집합니다. 관심있는 학생은 슬라이드에 있는 주제를 참고하셔서 온라인 신청해 주시기 바랍니다. 인턴십 토픽은 아래서 확인 가능합니다.\n' +
      '\n' +
      'Summer 2024 Internship Topics\n' +
      '\n' +
      'KAIST ICLab Summer 2024 Interns - Topics\n' +
      '\n',
    id: '00003',
    path: "https://brunch.co.kr/@kaisticlab/3"
  }
]

const Home: React.FC = () => {

  //   const announcements = (readMDXDir("data/posts")
  //     .filter((post) => post.type === "news") as AnnouncementProp[])
  //     .sort((a, b) => (a.pinned ? -1 : 1) - (b.pinned ? -1 : 1))
  // console.log(announcements);

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
          <div className="relative hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image 
              src="/wordcloud.png"
              fill
              alt="wordcloud of Interactive Computing Lab"
              objectFit="contain"
               />
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
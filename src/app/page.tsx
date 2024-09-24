import Announcement from "@/components/Announcement";
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
  return (
    <div className="m-auto w-full not-format flex flex-col gap-20 pt-12">
      <section id="hero">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="m-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 
              text-4xl md:text-5xl xl:text-6xl
              font-extrabold tracking-tight leading-none 
              text-black dark:text-white">
              Ubiquitous Computing to Support Wellbeing
            </h1>
            <p className="mb-6 lg:mb-8 
              md:text-lg lg:text-xl
              text-gray-500 dark:text-gray-400">
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
             text-black dark:text-white">
          Our Research Area
        </h2>
        <p className="mb-6 lg:mb-8 
            md:text-lg lg:text-xl 
            text-gray-500 dark:text-gray-400">
          Our research focuses on Human-Computer Interaction (HCI) and Ubiquitous Computing (UbiComp).
          <br />
          Major research areas include (1) Cognitive and Affective Computing, (2) IoT Data Science and Platform Research, and (3) Digital Health and Wellbeing Interventions.  We strive not only to make scholarly contributions but also to create a social impact by making our findings and services accessible.
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
      </section>
      <section id="announcement" className="mt-20 mb-20 text-center">
        <h2 className="mb-4
             text-2xl md:text-3xl xl:text-4xl
             tracking-tight font-extrabold 
             text-black dark:text-white">
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
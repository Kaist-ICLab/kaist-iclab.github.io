import Link from "@/components/Link";
import MainContent from "@/components/Main";
import lectures, { LectureInfo } from "@data/lectures";


const Lecture: React.FC<LectureInfo> = (lecture) => (
  <div className="not-format w-full max-screen-xl flex flex-col gap-10 pt-12 lg:flex-row lg:items-center">
      <div className="w-full aspect-[4/3] self-center lg:w-auto lg:h-[300px] flex lg:rounded-lg bg-blue-900 justify-center items-center p-4">
          <span className="text-3xl font-bold text-white text-center">{lecture.name}</span>
      </div>
      <div className="self-center sm:self-auto lg:items-start flex-auto flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
              {`${lecture.name} - ${lecture.code}`}
          </h3>
          <p className="text-base leading-7 text-gray-400 dark:text-gray-500">{lecture.audience}</p>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              {lecture.description}
          </p>
          <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
              To look for detailed contents we cover, please take a look at the syllabuses of previous years:
          </p>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {lecture.syllabuses.map((syllabus, idx) => (
                  <li key={idx}>
                      <Link href={syllabus.link} className="text-base text-blue-500 hover:underline">
                          {syllabus.semester}
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
  </div>
)

const Lectures: React.FC = () => {
  return (
    <MainContent>
      <div className="flex flex-col gap-12 items-center">
        <h2>Lectures</h2>
        <div className="w-full flex flex-col">
          <h3>Main Lectures</h3>
          {lectures.map((lecture) => (
            <Lecture key={lecture.code} {...lecture} />
          ))}
        </div>
      </div>
    </MainContent>

  );
}

export default Lectures;
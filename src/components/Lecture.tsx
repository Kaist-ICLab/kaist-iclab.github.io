import { LectureProp } from "@/types/lecture"

const Lecture: React.FC<LectureProp> = (lecture) => {
    if (lecture.type === "Main") {
        return (
            <div className="not-format w-full max-screen-xl flex flex-col gap-10 pt-12 lg:flex-row lg:items-center">
                <div className="w-full aspect-[4/3] self-center w-full lg:w-auto lg:h-[300px] flex lg:rounded-lg bg-blue-900 flex justify-center items-center p-4">
                    <span className="text-3xl font-bold text-white text-center">{lecture.name}</span>
                </div>
                {/* <img className="self-center aspect-[4/3] w-full lg:w-auto lg:h-[300px] flex object-fit lg:rounded-lg" src={lecture.img} alt="" /> */}
                <div className="self-center sm:self-auto lg:items-start flex-auto flex flex-col gap-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                        {`${lecture.name} - ${lecture.code}`}
                    </h3>
                    <p className="text-base leading-7 text-gray-400 dark:text-gray-500">{lecture.audience}</p>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        {lecture.description}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                        To look detailed contents we cover, please take a look for syllabuses of previous years:
                    </p>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        {lecture.syllabuses.map((syllabus, idx) => (
                            <li key={idx}>
                                <a href={syllabus.link} className="text-base text-blue-500 hover:underline">
                                    {syllabus.semester}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return <div className="not-format border-l-2 border-blue-800 px-2 mt-6 flex flex-col sm:flex-row gap-2 sm:items-center">
            <span className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{`${lecture.code}: ${lecture.name} - ${lecture.syllabuses[0].semester}`}</span>
        </div>
    }
}

export default Lecture


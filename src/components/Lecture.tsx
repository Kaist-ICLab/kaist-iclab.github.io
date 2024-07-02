"use client"

interface Syllabus {
    link: string;
    semester: string;
}

interface LectureProp {
    img: string;
    name: string;
    code: string;
    description: string;
    audience: string;
    syllabuses: Syllabus[];
}


const Lecture: React.FC<LectureProp> = (lecture) => {
    return (
        <div className="w-full max-screen-xl flex flex-col gap-10 pt-12 sm:flex-row">
            <img className="self-center aspect-[8/5] w-100 flex object-cover" src={lecture.img} alt="" />
            <div className="self-center sm:self-auto sm:items-start flex-auto flex flex-col items-center">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {`${lecture.name} - ${lecture.code}`}
                </h3>
                <p className="text-base leading-7 text-gray-400 dark:text-gray-500">{lecture.audience}</p>
                <p className="text-center sm:text-start text-base leading-7 text-gray-600 dark:text-gray-300">
                    {lecture.description}
                </p>
                <p className="mt-2 text-center sm:text-start text-base leading-7 text-gray-600 dark:text-gray-300">
                    To look detailed contents we cover, please take a look for syllabuses of previous years:
                </p>
                <ul className="text-center sm:text-start max-w-md space-y-1 text-gray-500 sm:list-disc sm:list-inside dark:text-gray-400">
                    {lecture.syllabuses.map((syllabus, idx) => (
                        <li key={idx}>
                            <a href={syllabus.link} className="text-blue-500 hover:underline">
                                {syllabus.semester}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export type { LectureProp, Syllabus };
export default Lecture


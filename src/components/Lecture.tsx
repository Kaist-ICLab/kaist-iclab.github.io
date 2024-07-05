"use client"

interface Syllabus {
    link: string;
    semester: string;
}

interface LectureProp {
    img?: string;
    name: string;
    type: "Main" | "Special"
    code: string;
    description?: string;
    audience?: string;
    syllabuses: Syllabus[];
}


const Lecture: React.FC<LectureProp> = (lecture) => {
    if (lecture.type === "Main") {
        return (
            <div className="not-format w-full max-screen-xl flex flex-col gap-10 pt-12 lg:flex-row lg:items-center">
                <img className="self-center aspect-[4/3] w-full lg:w-auto lg:h-[300px] flex object-fit lg:rounded-lg" src={lecture.img} alt="" />
                <div className="self-center sm:self-auto lg:items-start flex-auto flex flex-col gap-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
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

export type { LectureProp, Syllabus };
export default Lecture


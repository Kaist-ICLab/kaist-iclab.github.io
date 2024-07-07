"use client"

interface ProjectProp {
    id: string,
    title: string,
    tags?: string[],
    image?: string,
    content: string,
    [key: string]: any
}

const Project: React.FC<ProjectProp> = (project) => {
    return (
        <a href={`/projects/${project.id}`} className="not-format no-underline hover:no-underline gap-8 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
            <img className="object-contain lg:w-2/5 lg:h-full rounded-lg shadow" src={project.image} />
            <div>
                <div>
                    <h3 className="text-lg font-bold leading-5 text-gray-900 dark:text-white lg:mt-3">
                        {project.title}
                    </h3>
                    <div className="mt-3 p-0.1 flex flex-row gap-3">
                        {
                            project.tags?.map((tag) => (
                                <div key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                    {tag}
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-base font-normal text-gray-500 eCx_6PNzncAD5yo7Qcic mt-3 line-clamp-3">
                        {project.content}
                    </p>                    
                </div>
                
                <div className="text-base font-medium leading-6 mt-3">
                    <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                        Read more →
                    </div>
                </div>
            </div>
        </a>
    )
}

export type { ProjectProp };
export default Project
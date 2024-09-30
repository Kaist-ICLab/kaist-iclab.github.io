import { PublicationProp } from "@/types/publication";
import { formatAuthors } from "@/utils/process";
import Link from "@/components/Link";

const Publication: React.FC<PublicationProp> = (publication) => {
    const paper = publication.paper ? ("/publications/papers/" + publication.paper) : undefined;
    const slide = publication.slide ? ("/publications/slides/" + publication.slide) : undefined;
    return (
        <div className="not-format w-full max-w-screen-xl flex flex-col">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{publication.title}</h3>
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{formatAuthors(publication.authors)}</p>
            <p className="italic text-base leading-7 text-gray-600 dark:text-gray-300">{publication.venue + (publication.published === undefined || publication.published ? "" : " (To be appear)")}</p>
            <div className="flex mt-1">
                {[[paper, "paper", "blue"],
                [slide, "slide", "yellow"],
                [publication.code, "code", "gray"],
                [publication.video, "video", "red"]].map(([link, type, color]) => (
                    link && <Link href={link} newpage key={type} className={`bg-${color}-100 text-${color}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}>
                        {type}
                    </Link>
                ))}
            </div>
        </div>
    )
}



export type { PublicationProp };
export default Publication


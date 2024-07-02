"use client"

type PublicationType = "Conference" | "Journal" | "Poster" | "Workshop" | "Patent"

interface PublicationProp {
    title: string;
    year: number;
    venue: string;
    type: PublicationType;
    authors: string[];
    published?: boolean;
    doi?: string;
    venue_alias?: string;
    paper?: string;
    slide?: string;
    video?: string;
    code?: string;
}

const Publication: React.FC<PublicationProp> = (publication) => {
    const paper = publication.paper? ("/publications/papers/" + publication.paper): undefined;
    const slide = publication.slide? ("/publications/slides/" + publication.slide): undefined;
    return (
        <div className="w-full max-w-screen-xl flex flex-col">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{publication.title}</h3>
            <p className="text-sm leading-7 text-gray-600">{formatAuthors(publication.authors)}</p>
            <p className="italic text-base leading-7 text-gray-600">{publication.venue + (publication.published === undefined || publication.published? "":" (To be appear)")}</p>
            <div className="flex mt-1">
                {[[paper, "paper", "blue"],
                [slide, "slide", "yellow"],
                [publication.code, "code", "gray"], 
                [publication.video, "video", "red"]].map(([link, type, color]) => (
                    link && <a href={link} key={type} className={`bg-${color}-100 text-${color}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}>
                        {type}
                    </a>
                ))}
            </div>
        </div>
    )
}

const formatAuthors = (authors: string[]): string => {
    if (authors.length === 1) {
        return authors[0];
    }
    else if (authors.length === 2) {
        return authors.join(" and ");
    } else {
        return authors.slice(0, authors.length - 1).join(", ") + " and " + authors[authors.length - 1];
    }

}

export type { PublicationProp };
export default Publication


import fs from "fs";
import Cite from 'citation-js';
import supplementaries  from "@data/pulbicationSupplementary";

export interface PublicationSupplementaryInfo {
    paper: string;
    slide?: string;
    video?: string;
    code?: string;
    "google slide": string;
}

export interface PublicationInfo {
    title: string;
    venue: string;
    authors: string;
    date: string;
    published: boolean;
    supplementary: PublicationSupplementaryInfo;
}


const bib = fs.readFileSync('data/publication.bib', 'utf8');
const cites = new Cite(bib);

const parseAuthors = (authors: any): string => {
    let author = authors.map((a: any) => (a.given ?? "") + " " + (a.family ?? ""));
    if (author.length > 2) {
        author[author.length - 1] = "and " + author[author.length - 1]
    } else if (authors.length === 2) {
        author = [author[0] + " and " + author[1]]
    }
    author = author.join(", ");
    return author;
}

const parseVenue = (entry: any): string => {
    if (entry["type"] === "article-journal") {
        return `${entry['container-title']} Volume ${entry.volume}, Issue ${entry.issue}`;
    }
    else if (entry["type"] === "paper-conference") {
        return `${entry["container-title"]}` + (entry["collection-title"] ? ` (${entry["collection-title"]})` : "");
    }
    return entry["container-title"];
}

const parseDate = (entry: any): string => {
    const date = entry.issued["date-parts"][0].join("-")
    return date
}

const data = cites.get().map((entry: any) => {
    const key = entry["citation-key"]
    const authors = parseAuthors(entry.author)
    const venue = parseVenue(entry)
    const date = parseDate(entry);

    const ret = [key, {
        title: entry.title,
        authors,
        venue,
        date
    }]
    return ret
})


const publications: {
    [key: string]: PublicationInfo;
} = Object.fromEntries(data.map(([key, { title, authors, venue, date }]: [string, { title: string, authors: string, venue: string, date: string }]) => {
    return [key, {
        title,
        venue,
        authors,
        date,
        published: true,
        supplementary: {
            paper: fs.existsSync(`public/publications/papers/${key}.pdf`) ? `/publications/papers/${key}.pdf` : undefined,
            slide: fs.existsSync(`public/publications/slides/${key}.pdf`) ? `/publications/slides/${key}.pdf` : undefined,
            video: supplementaries[key]?.video,
            code: supplementaries[key]?.code,
            "google slide": supplementaries[key]?.["google slide"]
        }
    }]
}).sort((a: any, b: any) => Number(b[1].date.split("-")[0]) - Number(a[1].date.split("-")[0])))

// For debugging
// fs.writeFileSync('raw.json', JSON.stringify(cites.get(), null, 2));
// fs.writeFileSync('publications.json', JSON.stringify(publications, null, 2));

const currentYear = new Date().getFullYear();
export const publicationYears = Array.from({ length: currentYear - 2000 + 1 }, (_, index) => currentYear - index);

export default publications;

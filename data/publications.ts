import fs from "fs";
import Cite from "citation-js";
import supplementaries from "@data/pulbicationSupplementary";
import { isResearchProjectId, PublicationType, ResearchProjectId } from "@data/publicationMetadata";

export interface PublicationSupplementaryInfo {
    paper?: string;
    slide?: string;
    video?: string;
    code?: string;
    "google slide"?: string;
}

export interface PublicationInfo {
    id: string;
    title: string;
    venue: string;
    authors: string;
    date: string;
    published: boolean;
    type: PublicationType;
    projects: ResearchProjectId[];
    supplementary: PublicationSupplementaryInfo;
}

const bib = fs.readFileSync("data/publication.bib", "utf8");
const cites = new Cite(bib);

const parseAuthors = (authors: any[]): string => {
    let author = authors.map((item) => `${item.given ?? ""} ${item.family ?? ""}`.trim());
    if (author.length > 2) {
        author[author.length - 1] = `and ${author[author.length - 1]}`;
    } else if (author.length === 2) {
        author = [`${author[0]} and ${author[1]}`];
    }
    return author.join(", ");
}

const parseVenue = (entry: any): string => {
    if (entry.type === "article-journal") {
        return [
            entry["container-title"],
            entry.volume ? `Volume ${entry.volume}` : undefined,
            entry.issue ? `Issue ${entry.issue}` : undefined,
        ].filter(Boolean).join(", ");
    }
    if (entry.type === "paper-conference") {
        return `${entry["container-title"] ?? ""}${entry["collection-title"] ? ` (${entry["collection-title"]})` : ""}`;
    }
    if (entry.type === "document" && entry.note?.toLowerCase().includes("patent")) {
        return [entry.publisher, entry.note].filter(Boolean).join(" · ");
    }
    return entry["container-title"] ?? entry.publisher ?? "";
}

const parseType = (entry: any): PublicationType => {
    if (entry.type === "article-journal") return "Journal Article";
    if (entry.type === "paper-conference") return "Conference Paper";
    if (entry.type === "chapter") return "Book Chapter";
    if (entry.type === "document" && entry.note?.toLowerCase().includes("patent")) return "Patent";
    return "Other";
}

const parseProjects = (entry: any): ResearchProjectId[] => {
    const keywords = typeof entry.keyword === "string" ? entry.keyword.split(/[,;]/) : [];
    return keywords
        .map((keyword: string) => keyword.trim())
        .filter((keyword: string) => keyword.startsWith("project:"))
        .map((keyword: string) => keyword.slice("project:".length))
        .filter(isResearchProjectId);
}

const publications: PublicationInfo[] = cites.get().map((entry: any, index: number) => {
    const citationKey = entry["citation-key"];
    const date = entry.issued["date-parts"][0].join("-");
    return {
        id: `${citationKey}-${index}`,
        title: entry.title,
        authors: parseAuthors(entry.author),
        venue: parseVenue(entry),
        date,
        published: true,
        type: parseType(entry),
        projects: parseProjects(entry),
        supplementary: {
            paper: fs.existsSync(`public/publications/papers/${citationKey}.pdf`) ? `/publications/papers/${citationKey}.pdf` : undefined,
            slide: fs.existsSync(`public/publications/slides/${citationKey}.pdf`) ? `/publications/slides/${citationKey}.pdf` : undefined,
            video: supplementaries[citationKey]?.video,
            code: supplementaries[citationKey]?.code,
            "google slide": supplementaries[citationKey]?.["google slide"],
        },
    }
}).sort((a: PublicationInfo, b: PublicationInfo) => {
    const [aYear, aMonth = 0] = a.date.split("-").map(Number);
    const [bYear, bMonth = 0] = b.date.split("-").map(Number);
    return bYear - aYear || bMonth - aMonth;
});

export const publicationYears = Array.from(new Set(publications.map(({ date }) => Number(date.split("-")[0]))));

export default publications;

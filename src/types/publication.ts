export const publicationTypes = [
    "Conference",
    "Journal",
    "Poster",
    "Workshop",
    "Patent"
] as const;

export type PublicationType = typeof publicationTypes[number];

export interface PublicationProp {
    title: string;
    year: number;
    venue: string;
    authors: string[];
    type?: PublicationType;
    published?: boolean;
    doi?: string;
    venue_alias?: string;
    paper?: string;
    slide?: string;
    video?: string;
    code?: string;
}
export const researchProjects = [
    { id: "health-wellbeing", label: "Health & Wellbeing" },
    { id: "ubiquitous-sensing-systems", label: "Ubiquitous Sensing & Systems" },
    { id: "ai-data-intelligence", label: "AI & Data Intelligence" },
    { id: "human-ai-interaction", label: "Human-AI Interaction" },
    { id: "social-collaborative-computing", label: "Social & Collaborative Computing" },
    { id: "privacy-safety-responsible-computing", label: "Privacy, Safety & Responsible Computing" },
] as const;

export type ResearchProjectId = typeof researchProjects[number]["id"];

export const publicationTypes = [
    "Journal Article",
    "Conference Paper",
    "Book Chapter",
    "Patent",
    "Other",
] as const;

export type PublicationType = typeof publicationTypes[number];

const projectIds = new Set<string>(researchProjects.map(({ id }) => id));

export const isResearchProjectId = (value: string): value is ResearchProjectId => projectIds.has(value);

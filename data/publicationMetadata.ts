export const researchProjects = [
    { id: "emotion-labor", label: "Emotion Labor" },
    { id: "digital-columbus", label: "Digital Columbus" },
    { id: "ai-interviewer", label: "AI Interviewer", parentId: "digital-columbus" },
    { id: "mobile-agents", label: "Mobile Agents" },
    { id: "simsimi", label: "심심이" },
    { id: "meta-scientist-ai-science-hub", label: "Meta-Scientist & AI Science Hub" },
    { id: "physical-ai", label: "Physical AI" },
    { id: "ethics", label: "Ethics" },
    { id: "enpulse-mobile-wearable-computing", label: "EnPULSE for Mobile and Wearable Computing" },
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

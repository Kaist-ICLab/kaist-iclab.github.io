export const memberRoles = [
    "Professor", 
    "Post Doctoral Researcher", 
    "Ph.D. Student", 
    "M.S. Student", 
    "Alumni"
] as const;

export type MemberRole = typeof memberRoles[number];

export interface MemberProp{
    name: string;
    role: MemberRole;
    email: string;
    histories: Program[]; 
}

export interface AlumniProp extends MemberProp{
    role: "Alumni";
    affiliation?: string; 
}

export interface CurrentMemberProp extends MemberProp{
    image: string;
    role: Exclude<MemberRole, "Alumni">;
    research_interests?: string[];
    google_scholar?: string;
    github?: string;
    homepage?: string;
}

export interface Program {
    role: MemberRole;
    enterance: string;
    graduation?: string;
}
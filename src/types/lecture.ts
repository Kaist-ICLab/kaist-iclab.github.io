export interface Syllabus {
    link: string;
    semester: string;
}

export interface LectureProp {
    img?: string;
    name: string;
    type: "Main" | "Special"
    code: string;
    description?: string;
    audience?: string;
    syllabuses: Syllabus[];
}

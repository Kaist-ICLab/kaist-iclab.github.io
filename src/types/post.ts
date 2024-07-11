export interface PostProp {
    id: string,
    type: "announcement" | "blog" | "project",
    writer: string,
    created: string,
    lastModified?: string,
    title: string,
    image: string,
    publish: boolean,
    tags?: string[],
    content: string,
    [key: string]: any
}

export interface AnnouncementProp extends PostProp {
    type: "announcement",
    pinned: boolean
}

export interface ProjectProp extends PostProp {
    type: "project"
}

export interface BlogProp extends PostProp {
    type: "blog"
}
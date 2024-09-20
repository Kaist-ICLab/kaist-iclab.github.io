export interface PostProp {
    id: string,
    type: string,
    // type: "news" | "blog" | "project",
    writer: string,
    created: string,
    lastModified: string,
    title: string,
    image: string,
    text: string,
    publish: boolean,
    tags?: string[],
    content: string,
    [key: string]: any,
    path: string
}

export interface AnnouncementProp extends PostProp {
    // type: "news",
    pinned: boolean
}

export interface ProjectProp extends PostProp {
    type: "project"
}

export interface BlogProp extends PostProp {
    type: "blog"
}
export interface PostProp {
    id: string,
    type: "announcement" | "blog",
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
    
}

export interface BlogProp extends PostProp {
    type: "blog"
}
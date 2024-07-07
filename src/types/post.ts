interface PostProp {
    id: string,
    created: string,
    title: string,
    image: string,
    content?: string,
    [key: string]: any
}

interface AnnouncementProp extends PostProp {
    date?: string;
    title: string;
    description: string;
    path: string;
}

interface ProjectProp extends PostProp {
    
}

interface BlogProp extends PostProp {

}
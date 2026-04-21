export interface AnnouncementInfo {
    pinned: boolean,
    path: string,
    title: string,
    created: string,
}

const announcements: AnnouncementInfo[] = [
    {
        title: "26 여름 인턴모집 Summer Internship",
        created: "2026-04-21",
        pinned: true,
        path: "https://brunch.co.kr/@kaisticlab/51"
    }
]

export default announcements;

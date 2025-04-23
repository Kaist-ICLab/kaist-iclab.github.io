export interface AnnouncementInfo {
    pinned: boolean,
    path: string,
    title: string,
    created: string,
}

const announcements: AnnouncementInfo[] = [
    {
        title: "25 여름 인턴모집 Summer Internship",
        created: "2025-04-21",
        pinned: true,
        path: "https://brunch.co.kr/@kaisticlab/38"
    }
]

export default announcements;

export interface AnnouncementInfo {
    pinned: boolean,
    path: string,
    title: string,
    created: string,
}

const announcements: AnnouncementInfo[] = [
    {
        title: "26 겨울 인턴모집 Winter Internship",
        created: "2025-10-21",
        pinned: true,
        path: "https://brunch.co.kr/@kaisticlab/44"
    }
]

export default announcements;

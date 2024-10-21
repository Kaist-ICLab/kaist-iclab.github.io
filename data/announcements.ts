export interface AnnouncementInfo {
    pinned: boolean,
    path: string,
    title: string,
    created: string,
}

const announcements: AnnouncementInfo[] = [
    {
        title: "25 겨울 인턴모집 Winter Internship",
        created: "2024-10-29",
        pinned: true,
        path: "https://brunch.co.kr/@kaisticlab/29"
    },
    {
        title: '석박사&인턴모집: Prospective Students',
        created: '2023-11-13',
        pinned: true,
        path: "https://brunch.co.kr/@kaisticlab/3"
    }
]

export default announcements;
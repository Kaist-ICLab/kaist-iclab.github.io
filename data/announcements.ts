export interface AnnouncementInfo {
    pinned: boolean,
    path: string,
    title: string,
    created: string,
}

const announcements: AnnouncementInfo[] = [
    {
        title: "“레지던트 수준” AI가 정신과 환자 초진 맡는다",
        created: "2026-05-26",
        pinned: true,
        path: "https://n.news.naver.com/article/016/0002647547"
    }
]

export default announcements;

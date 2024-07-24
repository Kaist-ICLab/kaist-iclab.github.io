import { AnnouncementProp } from "@/types/post";

const Announcement: React.FC<AnnouncementProp> = (announcement) => {
    return (
        <div className="not-format inline-flex gap-2 lg:flex-row justify-between items-center">
            <a href={`/posts/${announcement.id}`} className={"not-format no-underline hover:no-underline " + (announcement.pinned? "":"ml-6")}>
                <h3 className="text-lg text-gray-700 dark:text-white line-clamp-1">
                    {announcement.pinned &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="float-left m-1 ml-0 h-5 w-5 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z" /></svg>
                    }
                    {announcement.title}
                </h3>
            </a>
            <span className="hidden sm:block flex-shrink-0 text-base text-gray-600 dark:text-gray-300 font-light">{announcement.created}</span>            
        </div>
    );
};

export default Announcement;
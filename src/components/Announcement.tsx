import { AnnouncementProp } from "@/types/post";

const Announcement: React.FC<AnnouncementProp> = (announcement) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <a href={`/posts/${announcement.id}`} className="not-format no-underline hover:no-underline">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {!announcement.pinned &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="float-left m-1 ml-0 h-5 w-5 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z" /></svg>
                    }
                    {announcement.title}
                </h3>
            </a>
            <span className="text-lg text-gray-600 dark:text-gray-300 font-light">{announcement.created}</span>            
        </div>
    );
};

export default Announcement;
"use client"
interface AnnouncementProps {
    date?: string;
    title: string;
    description: string;
    path: string;
}

const Announcement: React.FC<AnnouncementProps> = (announcement) => {
    return (
        <a href={announcement.path} className="not-format no-underline hover:no-underline">
            {announcement.date === undefined ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z" /></svg> :
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">{announcement.date}</p>
            }
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {announcement.title}
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-1">
                {announcement.description}
            </p>
            <div className="mt-2 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400">
                Read more →
            </div>
        </a>
    );
};

export default Announcement;
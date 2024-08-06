import members from "@data/members";

const Writer: React.FC<{name: string}> = ({name}) => {
    const member = members[name] ?? {name: "KAIST ICLab", role: ""};
    return (
        <div className="not-format inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-4 w-16 h-16 rounded-full" src={'image' in member? member.image:"/members/Anony.jpg"} alt={member.name} />
            <div>
                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</a>
                <p className="text-base text-gray-500 dark:text-gray-400">{`${member.role} at ICLab`}</p>
            </div>
        </div>
    );
};

export default Writer;
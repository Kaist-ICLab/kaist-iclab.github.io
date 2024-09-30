import { alumnis, currentMembers, currentMemberRole, MemberInfo } from "@data/members";
import MainContent from "@/components/Main";
import Image from "next/image";
import IconLink, { metas } from "@/components/IconLink";
import EmailBtn from "@/components/EmailBtn";

const CurrentMember: React.FC<MemberInfo> = (member) => (
    <div className="not-format flex flex-col sm:gap-12 sm:flex-row relative">
        <Image
            className="self-center w-52 rounded-2xl object-cover aspect-[4/5]"
            src={member.image ?? "/members/Anony.jpg"}
            alt={member.name}
            width={300}
            height={400}
        />
        <div className="mt-5 self-center sm:self-auto sm:items-start flex-auto max-w-lg flex flex-col items-center">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{member.role}</p>
            {member.research_interests &&
                <div className="text-center sm:text-start mt-4 text-base leading-7 text-gray-600">
                    <strong className="font-semibold text-gray-600 dark:text-white">Research Interest</strong>
                    <ul className="max-w-md space-y-1 text-gray-500 sm:list-disc sm:list-inside dark:text-gray-400">
                        {member.research_interests?.slice(0, 3).map((interest, idx) => (<li key={idx}>{interest}</li>))}
                    </ul>
                </div>
            }
            <div className="mt-4 flex gap-6">
                <EmailBtn email={member.email} />
                {metas.map((name) => {
                    const prop = member[name as keyof MemberInfo] as string | undefined
                    return (prop && <IconLink key={name} name={name} href={prop} />)
                })}
            </div>
        </div>
    </div>
)

const Alumni: React.FC<MemberInfo> = (member) => {
    return (<div className="border-l-2 border-blue-800 px-2 flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="flex flex-row items-center gap-2">
            <EmailBtn email={member.email} />
            <div className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">{member.name}</div>
        </div>
        <div className="text-base leading-7 text-gray-600 dark:text-gray-300">{member.affiliation ?? ""}</div>
    </div>
    )
}

const Members: React.FC = () => (
    <MainContent>
        <div className="">
            <h2>Members</h2>
            <div className="pt-8 flex flex-col gap-4">
                {currentMemberRole.map((role, _) => (
                    <div key={role} className="w-full flex flex-col items-center md:items-start mb-20">
                        <h3>{role === "Professor" ? "Director" : role}</h3>
                        <div className="pt-4 flex flex-col w-full gap-12">
                            {currentMembers
                                .filter((member) => member.role === role)
                                .map((member) => <CurrentMember key={member.name} {...member} />)}
                        </div>
                    </div>
                ))}
                <div className="w-full flex flex-col items-center md:items-start mb-20">
                    <h3>Alumni</h3>
                    <div className="pt-0 flex flex-col w-full gap-4">
                        {alumnis.map((alumni) => <Alumni key={alumni.name} {...alumni} />)}
                    </div>
                </div>
            </div>
        </div>
    </MainContent>
)

export default Members;
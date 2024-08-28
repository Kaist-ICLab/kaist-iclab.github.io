"use client"
import { useState } from "react";
import { MemberRole, MemberProp, CurrentMemberProp, AlumniProp } from "@/types/member";
import Icon from "@/components/Icon";

const Member: React.FC<MemberProp> = (member) => (
    member.role === "Alumni" ? <Alumni {...(member as AlumniProp)} /> : <CurrentMember {...(member as CurrentMemberProp)} />
)

const CurrentMember: React.FC<CurrentMemberProp> = (member) => {
    const [target, setTarget] = useState<string>("")
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div className="not-format flex flex-col sm:gap-12 sm:flex-row">
            <img className="self-center aspect-[4/5] w-52 flex rounded-2xl object-cover" src={member.image} alt={member.name} />
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
                <ul className="mt-4 flex gap-x-6">
                    {["email", "google_scholar", "github", "homepage"].map((type) => (
                        member[type as keyof CurrentMemberProp] && <li key={type}>
                            <span className="sr-only">{type}</span>
                            <a 
                                href={member[type as keyof CurrentMemberProp] as string} 
                                className="relative text-gray-400"
                                onClick={(event) => {setIsHovered(false); type === "email" ? emailClick(event): null }}
                                onMouseEnter={() => {setIsHovered(true); setTarget(type);}}
                                onMouseLeave={() => {setIsHovered(false); setTarget("");}}
                            >
                                <Icon icon={type as string} className="w-7 h-7 hover:text-blue-600 text-gray-400 dark:text-gray-500" />
                                {type === "email" ? <div id="toast-success" className="z-10 bg-transparent opacity-100 absolute top-0 left-6 w-44 hidden">
                                    <Toast />
                                </div> : null}
                            </a>
                            {isHovered && target===type && 
                                <span className="absolute bg-gray-400 text-white p-2 rounded-lg transition-opacity duration-300 z-50 text-xs tooltip">{type.replace("_"," ")}</span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Alumni: React.FC<AlumniProp> = (member) => {
    return (<div className="border-l-2 border-blue-800 px-2 flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="flex flex-row items-center gap-2">
            <a 
                href={member.email} 
                className="relative text-gray-400" 
                onClick={(event) => { emailClick(event) }}
            >
                <Icon icon="email" className="w-7 h-7 hover:text-blue-600 text-gray-500 dark:text-gray-400" />
                <div id="toast-success" className="absolute top-0 left-6 w-44 hidden opacity-100 bg-transparent">
                    <Toast />
                </div>
            </a>
            <div className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">{member.name}</div>
        </div>
        <div className="text-base leading-7 text-gray-600 dark:text-gray-300">{member.affiliation ?? ""}</div>
    </div>
    )
}


const emailClick = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const toast = event.currentTarget.lastChild as HTMLElement
    const email = event.currentTarget.href.replace(window.location.origin + "/", "");
    await navigator.clipboard.writeText(email)
    toast?.classList.remove("hidden")
    setTimeout(() => {
        toast?.classList.add("hidden")
    }, 1000)
}

const Toast = () => {
    return <div className="z-10 flex items-center w-full max-w-xs p-2 mb-4 text-gray-700 bg-green-50 rounded-lg shadow dark:text-gray-200 dark:bg-green-900" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <Icon icon="check" className="w-5 h-5"/>
            <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Email Copied!</div>
    </div>
}


export type { MemberProp, MemberRole };
export default Member


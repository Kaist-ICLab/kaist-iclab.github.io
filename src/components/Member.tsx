"use client"

import React from "react";
import { Icon } from '@iconify/react';

type MemberRole = "Director" | "Post Doctoral Researcher" | "Ph.D. Student" | "M.S. Student" | "Alumni";

interface MemberProp {
    name: string;
    role: MemberRole;
    email: string;
    research_interests?: string[];
    affiliation?: string; // affiliation for Alumnis
    google_scholar?: string;
    github?: string;
    homepage?: string;
    histories?: any;
}


const Member: React.FC<MemberProp> = (member) => {
    const image = "/members/" + member.name.replace(" ", "") + ".jpg";
    if (member.role !== "Alumni") {
        return (
            <div className="flex flex-col gap-10 pt-12 sm:flex-row">
                <img className="self-center aspect-[4/5] w-52 flex rounded-2xl object-cover" src={image} alt={member.name} />
                <div className="self-center sm:self-auto sm:items-start flex-auto max-w-lg flex flex-col items-center">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{member.role}</p>
                    {member.research_interests &&
                        <div className="text-center sm:text-start mt-6 text-base leading-7 text-gray-600">
                            <strong className="font-semibold text-gray-600 dark:text-white">Research Interest</strong>
                            <ul className="max-w-md space-y-1 text-gray-500 sm:list-disc sm:list-inside dark:text-gray-400">
                                {member.research_interests?.slice(0, 3).map((interest, idx) => (<li key={idx}>{interest}</li>))}
                            </ul>
                        </div>
                    }
                    <ul className="mt-6 flex gap-x-6">
                        {[[member.email, "mdi:email"], [member.google_scholar, "academicons:google-scholar"], [member.github, "mdi:github"], [member.homepage, "mdi:home"]].map(([link, type]) => (
                            link && <li key={type}>
                                <a href={link} className="relative text-gray-400" onClick={(event) => {type==="mdi:email"? emailClick(event): null}}>
                                    <Icon icon={type as string} className="w-6 h-6" />
                                    {type === "mdi:email" ? <div id="toast-success" className="z-10 bg-white opacity-100 absolute top-0 left-6 w-44 hidden">
                                        <Toast />
                                    </div> : null}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return (<div className="border-l-2 border-blue-800 px-2 mt-6 flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="flex flex-row items-center gap-2">
                <a href={member.email} className="relative text-gray-400" onClick={(event) => { emailClick(event) }}>
                    <Icon icon="mdi:email" className="w-6 h-6" />
                    <div id="toast-success" className="absolute top-0 left-6 w-44 hidden bg-white opacity-100">
                        <Toast />
                    </div>
                </a>
                <div className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</div>
            </div>
            <div className="text-base leading-7 text-gray-600">{member.affiliation ?? ""}</div>
        </div>
        )
    }

}

const emailClick = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.log("currentTarget", event.currentTarget)
    const toast = event.currentTarget.lastChild as HTMLElement
    const email = event.currentTarget.href.replace(window.location.origin + "/", "");
    await navigator.clipboard.writeText(email)
    toast?.classList.remove("hidden")
    setTimeout(() => {
        toast?.classList.add("hidden")
    }, 1000)
}

const Toast = () => {
    return <div className="z-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Email Copied!</div>
    </div>
}


export type { MemberProp, MemberRole };
export default Member


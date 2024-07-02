"use client"

import React from "react";

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
                        {[[member.email, "email"], [member.google_scholar, "google_scholar"], [member.github, "github"], [member.homepage, "homepage"]].map(([link, type]) => (
                            link && <li key={type}>
                                <a href={link} className="text-gray-400">
                                    {/* TODO: change */}
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"></path></svg>
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
                <a href={member.email} className="text-gray-400">
                    {/* TODO: change */}
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"></path></svg>
                </a>
                <div className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</div>
            </div>
            <div className="text-base leading-7 text-gray-600">{member.affiliation ?? ""}</div>
        </div>
        )
    }

}


export type { MemberProp, MemberRole };
export default Member


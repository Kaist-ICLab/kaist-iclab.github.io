"use client"
import useSwitch from "@/hooks/useSwitch";
import useYPosition from "@/hooks/useYPosition";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

const navs = [
    { name: "publications" },
    { name: "members" },
    { name: "lectures" },
    { name: "galleries" },
    { name: "blog", link: "https://brunch.co.kr/@kaisticlab" },
]

const Menu: React.FC<{
    name: string;
    link?: string;
    isActive: boolean;
}> = ({ name, link, isActive }) => (
    <a href={link ?? `/${name}`} className={
        isActive ? "capitalize block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500 flex"
            : "capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent flex"
    }>
        {name}
        {link !== undefined ?
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"></path></svg>
            : null
        }
    </a>

)

const IconButton: React.FC<{
    children?: React.ReactNode;
    onClick: () => void;
    altText: string;
}> = ({ children, onClick, altText }) => (
    <button onClick={onClick} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden">
        <span className="sr-only">{altText}</span>
        {children ?? null}
    </button>
)

const NavBar: React.FC = () => {
    const currentPath = usePathname();
    const [navOpened, changeNavOpenStatus] = useSwitch();
    const [yPosition, _] = useYPosition();

    return (
        <nav className={"sticky top-0 bg-white border-gray-200 dark:bg-gray-900 z-[999]" + (yPosition > 0 ? " shadow-md" : "")}>
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* TODO: Logo Change*/}
                <Logo />
                <IconButton onClick={changeNavOpenStatus} altText="Open/Close Navigation">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </IconButton>
                <div className={"w-full lg:flex lg:flex-row lg:items-center lg:gap-4 lg:w-auto lg:top-0 lg:p-0 lg:static " + (navOpened ? "block absolute top-14 left-0 z-10 px-4" : "hidden")}>
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        {navs.map((nav) => (
                            <li key={nav.name}>
                                <Menu name={nav.name} link={nav.link} isActive={currentPath === nav.link} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

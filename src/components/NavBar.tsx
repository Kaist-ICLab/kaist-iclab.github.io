"use client"
// Change from https://flowbite.com/docs/components/navbar/

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

interface NavBarProps {
    navs: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navs }) => {
    const currentPath = usePathname();
    const [showMobileNav, changeMobileNav] = useState(false);

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setPosition(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    const activeTheme = "capitalize block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500"
    const inactiveTheme = "capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
    return (
        <nav className={"sticky top-0 bg-white border-gray-200 dark:bg-gray-900 z-[999]" + (position > 0 ? " shadow-md" : "")}>
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* TODO: Logo Change*/}
                <Logo/>
                <button onClick={() => { changeMobileNav((status) => !status) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {/* TODO: SVG Change */}
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={"w-full lg:block lg:w-auto lg:top-0 lg:p-0 lg:static " + (showMobileNav ? "block absolute top-14 left-0 z-10 px-4" : "hidden")}>
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        {navs.map((nav) => (
                            <li key={nav}>
                                <a href={`/${nav}`} className={currentPath === `/${nav}` ? activeTheme : inactiveTheme} aria-current="page">{nav}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

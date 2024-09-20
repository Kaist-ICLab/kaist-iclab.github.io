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

    const [isDark, setTheme] = useState(false);

    const [position, setPosition] = useState(0);

    useEffect(() => {
        // 로컬 스토리지에서 테마 상태를 확인
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setTheme(true);
            document.body.classList.add('dark');
        } else {
            setTheme(false);
            document.body.classList.remove('dark');
        }
    }, []);

    const onChangeTheme = () => {
        if (isDark) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setTheme(!isDark);
    }



    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    // useEffect(() => {
    //     if (isDark) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.theme = 'dark'
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.theme = 'light'
    //     }
    // }, [isDark]);

    const activeTheme = "capitalize block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500"
    const inactiveTheme = "capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
    return (
        <nav className={"sticky top-0 bg-white border-gray-200 dark:bg-gray-900 z-[999]" + (position > 0 ? " shadow-md" : "")}>
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* TODO: Logo Change*/}
                <Logo />
                <div className="flex flex-row items-center lg:hidden">
                    <button type="button" onClick={() => setTheme(!isDark)} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg className={"w-6 h-6 " + (isDark ? "" : "hidden")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg className={"w-6 h-6 " + (isDark ? "hidden" : "")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                    <button onClick={() => { changeMobileNav((status) => !status) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open main menu</span>
                        {/* TODO: SVG Change */}
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={"w-full lg:flex lg:flex-row lg:items-center lg:gap-4 lg:w-auto lg:top-0 lg:p-0 lg:static " + (showMobileNav ? "block absolute top-14 left-0 z-10 px-4" : "hidden")}>
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        {navs.map((nav) => (
                            nav === "blog" ?
                                <li key={nav}>
                                    <a href="https://brunch.co.kr/@kaisticlab" className={inactiveTheme + " flex"} aria-current="page">
                                        {nav}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"></path></svg>
                                    </a>
                                </li>
                                : <li key={nav}>
                                    <a href={`/${nav}`} className={currentPath === `/${nav}` ? activeTheme : inactiveTheme} aria-current="page">{nav}</a>
                                </li>
                        ))}
                    </ul>
                    <button type="button" onClick={onChangeTheme} className="hidden lg:block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        <svg className={"w-6 h-6 " + (isDark ? "" : "hidden")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg className={"w-6 h-6 " + (isDark ? "hidden" : "")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

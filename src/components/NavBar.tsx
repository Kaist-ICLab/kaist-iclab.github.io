"use client"
import useSwitch from "@/hooks/useSwitch";
import useYPosition from "@/hooks/useYPosition";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";
import Link from "@/components/Link";

const navs: { name: string; link?: string }[] = [
    { name: "projects", link: "/#research-projects" },
    { name: "news", link: "/#lab-news" },
    { name: "collaboration", link: "/#join-collaborate" },
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
    <Link href={link ?? `/${name}`} className={
        isActive ? "capitalize block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 flex"
            : "capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 flex"
    }>
        {name}
        {link?.startsWith("https://") ?
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"></path></svg>
            : null
        }
    </Link>

)

const IconButton: React.FC<{
    children?: React.ReactNode;
    onClick: () => void;
    altText: string;
    expanded: boolean;
}> = ({ children, onClick, altText, expanded }) => (
    <button onClick={onClick} type="button" aria-expanded={expanded} aria-controls="main-navigation" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">{altText}</span>
        {children ?? null}
    </button>
)

const NavBar: React.FC = () => {
    const currentPath = usePathname();
    const [navOpened, changeNavOpenStatus] = useSwitch();
    const [yPosition, _] = useYPosition();

    const handleNavigationClick = (event: React.MouseEvent<HTMLUListElement>) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const anchor = event.target instanceof Element ? event.target.closest("a") : null;
        if (!anchor) return;

        if (navOpened) changeNavOpenStatus();

        const href = anchor.getAttribute("href");
        if (currentPath !== "/" || !href?.startsWith("/#")) return;

        const hash = href.slice(1);
        const section = document.getElementById(hash.slice(1));
        if (!section) return;

        event.preventDefault();
        // Measure the destination after the mobile navigation has collapsed.
        requestAnimationFrame(() => {
            if (window.location.hash !== hash) {
                window.history.pushState(window.history.state, "", hash);
            }
            section.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start",
            });
        });
    };

    return (
        <nav className={"sticky top-0 bg-white border-gray-200 z-50" + (yPosition > 0 ? " shadow-md" : "")}>
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* TODO: Logo Change*/}
                <Logo />
                <IconButton onClick={changeNavOpenStatus} altText="Open/Close Navigation" expanded={navOpened}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </IconButton>
                <div id="main-navigation" className={"w-full lg:flex lg:items-center lg:w-auto " + (navOpened ? "block" : "hidden")}>
                    <ul
                        className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:gap-6 lg:mt-0 lg:border-0 lg:bg-white"
                        onClickCapture={handleNavigationClick}
                    >
                        {navs.map((nav) => (
                            <li
                                key={nav.name}
                                className={nav.name === "publications" || nav.name === "blog"
                                    ? "border-t border-gray-300 mt-2 pt-2 lg:mt-0 lg:pt-0 lg:border-t-0 lg:-ml-2 lg:border-l lg:pl-4"
                                    : ""}
                            >
                                <Menu name={nav.name} link={nav.link} isActive={currentPath === "/" + nav.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

"use client";

import type { MouseEvent, ReactNode } from "react";

export default function SectionLink({ href, className, children }: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const section = document.getElementById(href.slice(1));
    if (!section) return;

    event.preventDefault();
    if (window.location.hash !== href) {
      window.history.pushState(window.history.state, "", href);
    }
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return <a href={href} className={className} onClick={handleClick}>{children}</a>;
}

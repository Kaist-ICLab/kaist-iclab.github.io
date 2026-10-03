"use client";

import Image from "next/image";
import { useId, useState } from "react";

export default function ResearchProjectCard({ title, image, description, href }: {
  title: string;
  image: string;
  description: string;
  href: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  return (
    <article
      className="home-project grid min-w-0 overflow-hidden rounded bg-white"
      data-expanded={expanded}
      onKeyDown={(event) => {
        if (event.key === "Escape") setExpanded(false);
      }}
    >
      <div className="home-project-content flex min-w-0 flex-col">
        <Image src={image} alt={title} width={1536} height={1024} className="h-auto w-full shrink-0" unoptimized />
        <h3 id={`${id}-title`} className="flex flex-1 items-center px-5 py-4 text-lg font-bold leading-tight tracking-tight text-gray-600">{title}</h3>
      </div>

      {/* CSS selects the appropriate control based on hover/pointer capability. */}
      <a
        className="home-project-link home-project-control"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
      />
      <button
        className="home-project-toggle home-project-control"
        type="button"
        aria-labelledby={`${id}-title`}
        aria-expanded={expanded}
        aria-controls={`${id}-overlay`}
        onClick={() => setExpanded((value) => !value)}
      />

      <div id={`${id}-overlay`} className="home-project-overlay">
        <p id={`${id}-description`}>{description}</p>
        <a
          className="home-project-learn-more focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${title} (opens in a new tab)`}
        >
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

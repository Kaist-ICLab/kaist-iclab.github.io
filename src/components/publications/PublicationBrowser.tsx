"use client";

import Link from "@/components/Link";
import type { PublicationInfo } from "@data/publications";
import {
  publicationTypes,
  researchProjects,
  type PublicationType,
  type ResearchProjectId,
} from "@data/publicationMetadata";
import { useEffect, useId, useMemo, useRef, useState } from "react";

const resourceLinks = [
  { key: "paper", label: "Paper", className: "bg-blue-100 text-blue-800" },
  { key: "slide", label: "Slide", className: "bg-yellow-100 text-yellow-800" },
  { key: "google slide", label: "Google slide", className: "bg-yellow-100 text-yellow-800" },
  { key: "code", label: "Code", className: "bg-gray-100 text-gray-800" },
  { key: "video", label: "Video", className: "bg-red-100 text-red-800" },
] as const;

const projectLabels = Object.fromEntries(researchProjects.map(({ id, label }) => [id, label])) as Record<ResearchProjectId, string>;

type ProjectSelection = ResearchProjectId | "all";

const FilterSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, className = "", ...props }) => (
  <span className="grid min-w-0">
    <select
      {...props}
      className={`col-start-1 row-start-1 min-h-[42px] w-full min-w-0 appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm font-normal text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${className}`}
    >
      {children}
    </select>
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="pointer-events-none col-start-1 row-start-1 mr-3 h-4 w-4 self-center justify-self-end text-gray-500"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

function FilterDropdown<T extends string>({ label, allLabel, options, value, onChange }: {
  label: string;
  allLabel: string;
  options: readonly { id: T; label: string }[];
  value: T | "all";
  onChange: (value: T | "all") => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  const selectedDefinition = value === "all" ? undefined : options.find(({ id }) => id === value);
  const selectedLabel = value === "all"
    ? allLabel
    : selectedDefinition?.label;

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const selectedOption = menuRef.current?.querySelector<HTMLButtonElement>("[aria-checked='true']");
    selectedOption?.focus();
  }, [open]);

  const selectOption = (option: T | "all") => {
    onChange(option);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const options = Array.from(menuRef.current?.querySelectorAll<HTMLButtonElement>("[role='menuitemradio']") ?? []);
    if (options.length === 0) return;
    const currentIndex = options.indexOf(document.activeElement as HTMLButtonElement);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? options.length - 1
        : event.key === "ArrowDown"
          ? (currentIndex + 1) % options.length
          : (currentIndex - 1 + options.length) % options.length;
    options[nextIndex]?.focus();
  };

  const renderOption = (id: T | "all", optionLabel: string) => {
    const selected = value === id;
    return (
      <button
        key={id}
        type="button"
        role="menuitemradio"
        aria-checked={selected}
        tabIndex={-1}
        onClick={() => selectOption(id)}
        className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
          selected ? "bg-blue-50 font-medium text-blue-800" : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <span className={`flex h-4 w-4 shrink-0 items-center justify-center ${selected ? "text-blue-700" : "text-transparent"}`} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>{optionLabel}</span>
      </button>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-1 text-sm font-medium text-gray-700"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <span id={labelId}>{label}</span>
      <button
        ref={triggerRef}
        type="button"
        aria-labelledby={`${labelId} ${labelId}-value`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? `${labelId}-menu` : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (["ArrowDown", "ArrowUp"].includes(event.key)) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="flex min-h-[42px] w-full items-center justify-between gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-left text-sm font-normal text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        <span id={`${labelId}-value`} className="truncate">{selectedLabel}</span>
        <svg viewBox="0 0 20 20" fill="none" className={`h-4 w-4 shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          id={`${labelId}-menu`}
          role="menu"
          aria-labelledby={labelId}
          onKeyDown={handleMenuKeyDown}
          className="absolute left-0 top-full z-40 mt-2 max-h-[28rem] w-full min-w-72 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
        >
          {renderOption("all", allLabel)}
          <div className="my-2 border-t border-gray-100" />

          {options.map((option) => renderOption(option.id, option.label))}
        </div>
      )}
    </div>
  );
};

const Publication: React.FC<{ publication: PublicationInfo }> = ({ publication }) => (
  <article className="not-format flex w-full max-w-screen-xl flex-col">
    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{publication.title}</h3>
    <p className="text-sm leading-7 text-gray-600">{publication.authors}</p>
    <p className="text-base italic leading-7 text-gray-600">
      {publication.venue + (publication.published ? "" : " (To be appear)")}
    </p>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      {resourceLinks.map(({ key, label, className }) => {
        const href = publication.supplementary[key];
        return href ? (
          <Link href={href} newpage key={key} className={`${className} rounded px-2.5 py-0.5 text-sm font-medium no-underline hover:no-underline`}>
            {label}
          </Link>
        ) : null;
      })}
      {publication.projects.map((project) => (
        <span key={project} className="rounded bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-700">
          {projectLabels[project]}
        </span>
      ))}
    </div>
  </article>
)

const PublicationBrowser: React.FC<{ publications: PublicationInfo[] }> = ({ publications }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectSelection>("all");
  const [selectedType, setSelectedType] = useState<PublicationType | "all">("all");

  const filteredPublications = useMemo(() => publications.filter((publication) => (
    (selectedProject === "all" || publication.projects.includes(selectedProject)) &&
    (selectedType === "all" || publication.type === selectedType)
  )), [publications, selectedProject, selectedType]);

  const availableTypes = useMemo(() => publicationTypes.filter((type) => (
    publications.some((publication) => publication.type === type)
  )), [publications]);

  const groupedPublications = useMemo(() => {
    const groups = new Map<number, PublicationInfo[]>();
    filteredPublications.forEach((publication) => {
      const year = Number(publication.date.split("-")[0]);
      groups.set(year, [...(groups.get(year) ?? []), publication]);
    });
    return Array.from(groups.entries()).sort(([a], [b]) => b - a);
  }, [filteredPublications]);

  const scrollToYear = (year: number) => {
    const element = document.getElementById(String(year));
    if (!element) return;
    window.history.replaceState(null, "", `#${year}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <h2>Publications</h2>

      <div className="not-format mb-8 mt-8 grid gap-4 md:grid-cols-2 xl:mr-36">
        <FilterDropdown<ResearchProjectId>
          label="Research Project"
          allLabel="All projects"
          options={researchProjects}
          value={selectedProject}
          onChange={setSelectedProject}
        />
        <FilterDropdown<PublicationType>
          label="Publication Type"
          allLabel="All types"
          options={availableTypes.map((type) => ({ id: type, label: type }))}
          value={selectedType}
          onChange={setSelectedType}
        />
      </div>

      {groupedPublications.length > 0 && (
        <label className="not-format mb-8 flex flex-col gap-1 text-sm font-medium text-gray-700 xl:hidden">
          Jump to year
          <FilterSelect
            defaultValue=""
            onChange={(event) => scrollToYear(Number(event.target.value))}
          >
            <option value="" disabled>Select a year</option>
            {groupedPublications.map(([year]) => <option key={year} value={year}>{year}</option>)}
          </FilterSelect>
        </label>
      )}

      <div className="not-format grid gap-12 xl:grid-cols-[minmax(0,1fr)_7rem]">
        <div className="flex min-w-0 flex-col gap-12">
          {groupedPublications.map(([year, yearPublications]) => (
            <section key={year} aria-labelledby={`year-${year}`} className="flex scroll-mt-28 flex-col gap-4" id={String(year)}>
              <h3 id={`year-${year}`} className="sticky top-[72px] z-10 w-full bg-white py-4 text-2xl font-bold text-gray-900">{year}</h3>
              <div className="flex w-full flex-col gap-8">
                {yearPublications.map((publication) => <Publication key={publication.id} publication={publication} />)}
              </div>
            </section>
          ))}

          {groupedPublications.length === 0 && (
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-12 text-center text-gray-600">
              No publications match the selected filters.
            </div>
          )}
        </div>

        {groupedPublications.length > 0 && (
          <aside aria-label="Publication years" className="hidden xl:block">
            <nav className="sticky top-28 flex flex-col gap-2 border-l border-gray-200 pl-5">
              {groupedPublications.map(([year]) => (
                <a
                  key={year}
                  href={`#${year}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToYear(year);
                  }}
                  className="text-sm text-gray-600 no-underline hover:text-blue-700 hover:underline"
                >
                  {year}
                </a>
              ))}
            </nav>
          </aside>
        )}
      </div>
    </>
  )
}

export default PublicationBrowser;

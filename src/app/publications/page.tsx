"use client"
import Publication from "@/components/Publication";
import Tab from "@/components/Tab";
import { H3 } from "@/components/Typography";
import publications from "@/data/publications";
import React, { useState } from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2010 + 1 }, (_, index) => currentYear - index);
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div className="m-auto px-4 w-full max-w-screen-xl flex flex-col">
      <Tab tabs={["All", "Conference", "Journal", "Workshop", "Patent"]} selectedTab={selectedTab} changeTab={setSelectedTab} />
      <div className="w-full flex flex-col gap-12">
        {years.map((year) => {
          const filteredPublications = Object.values(publications).filter((publication) => publication.year === year && (selectedTab === "All" || publication.type === selectedTab));
          if (filteredPublications.length === 0) return null;
          return <div key={year} className="mt-6 self-center w-full max-w-screen-xl flex flex-col items-start gap-4">
            <H3>{year}</H3>
            <div className="w-full flex flex-col gap-8">
              {
                filteredPublications.map((publication, index) => <Publication key={index} {...publication} />)
              }
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
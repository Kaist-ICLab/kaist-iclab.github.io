"use client"
import Project from "@/components/Project";
// import projects from "@/data/projects";
import React, { useState } from "react";

export default function Home() {
    const project = {"title": "Hihihi"};
  return (
    <div className="max-w-screen-xl px-4 mx-auto mt-4">
      <div className="w-full flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-20 mt-8">
            <Project  {...project}/>
            <Project  {...project}/>
        </div>
      </div>
    </div>
  );
}
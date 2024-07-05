"use client"
import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
// import projects from "@/data/projects";
import React, { useState } from "react";

export default function Home() {
  const project = { "title": "Hihihi" };
  return (
    <div className="max-w-screen-xl px-4 mx-auto mt-4">
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="grid grid-cols-1 gap-20 mt-8">
          <Post  {...project} />
          <Post  {...project} />
        </div>
        <Pagination/>
      </div>
    </div>
  );
}
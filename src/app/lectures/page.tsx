"use client"
import Lecture from "@/components/Lecture";
import { H3 } from "@/components/Typography";
import lectures from "@/data/lectures";


export default function Home() {
  return (
    <div className="m-auto w-full max-w-screen-xl flex flex-col items-center sm:items-start py-12 px-4 gap-32">
      <div className="w-full max-w-screen-xl flex flex-col items-center sm:items-start">
        <H3>Main Lectures</H3>
        {lectures.map((lecture) => (
          <Lecture key={lecture.code} {...lecture} />
        ))}
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <H3>Special Lectures</H3>
        {
          lectures.map((lecture) => (
            <Lecture key={lecture.code} {...lecture} />
          ))
        }
      </div>
    </div>
  );
}
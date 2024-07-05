"use client"
import Project, { ProjectProp } from "@/components/Project";

const Projects: React.FC = () => {
  const projects: ProjectProp[] = [{}]
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
      {projects.map((project) =>
        <Project key={`post-idx`} {...project} />
      )}
    </div>
  );
}

export default Projects
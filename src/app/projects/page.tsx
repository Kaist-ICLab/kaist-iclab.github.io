import Project from "@/components/Project";
import { ProjectProp } from "@/types/post";
import { readMDXDir } from "@/utils/file";

const Projects: React.FC = () => {
  const projects = readMDXDir('data/projects') as ProjectProp[];
  
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
      <h2>Projects</h2>
      {projects.map((project,idx) =>
        <Project key={`project-${idx}`} {...project} />
      )}
    </div>
  );
}

export default Projects
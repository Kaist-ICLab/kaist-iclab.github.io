import Project, { ProjectProp } from "@/components/Project";
import { readMDXDir } from "@/utils/file";

const Projects: React.FC = () => {
  const projects = readMDXDir('data/projects') as ProjectProp[];
  
  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
      <h2>Projects</h2>
      {projects.map((project) =>
        <Project key={`post-idx`} {...project} />
      )}
    </div>
  );
}

export default Projects
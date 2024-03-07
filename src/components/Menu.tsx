import React from "react";
import { Project } from "src/App";
import Button from "./StyledComponents/Button";

type Props = {
  newProjectHandler: () => void;
  projects: Project[];
  projectSelectionHandler: (projectId: string) => void;
};

const Menu: React.FC<Props> = ({
  newProjectHandler,
  projects,
  projectSelectionHandler,
}) => {
  return (
    <menu className="min-h-screen bg-stone-950 rounded-tr-2xl px-10 pt-20">
      <div className="flex flex-col gap-10 mb-10">
        <h1 className="text-stone-200 uppercase font-bold text-2xl">
          Your Projects
        </h1>
        <Button onClick={newProjectHandler}>+ Add Project</Button>
      </div>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => projectSelectionHandler(project.id)}
          >
            <button className="pr-32 pl-2 py-1.5 hover:bg-stone-900 hover:rounded-sm text-stone-300 hover:text-stone-200 text-xl">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Menu;

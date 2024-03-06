import React from "react";
import { Project } from "src/App";

type Props = {
  projects: Project[];
  projectSelectionHandler: (projectId: string) => void;
};

const MenuList: React.FC<Props> = ({ projects, projectSelectionHandler }) => {
  return (
    <ul className="flex flex-col gap-2">
      {projects.map((project) => (
        <li
          key={project.id}
          onClick={() => projectSelectionHandler(project.id)}
          className="pr-32 pl-2 py-1.5 hover:bg-menuHoverItem hover:rounded-sm hover:text-menuHoverTextItem text-menuTextItem text-xl"
        >
          <button>{project.title}</button>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

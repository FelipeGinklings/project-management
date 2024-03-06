import React from "react";
import { Project } from "src/App";
import MenuList from "./MenuList";

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
    <menu className="min-h-screen bg-menu rounded-tr-2xl mt-10 px-10 pt-20">
      <div>
        <h1 className="text-menuTitle uppercase font-bold text-2xl mb-10">
          Your Projects
        </h1>
        <button
          className="text-menuTextButton hover:text-menuButtonTextHover bg-menuButton hover:bg-menuButtonHover rounded-md text-xl mb-10 px-5 py-2.5"
          onClick={newProjectHandler}
        >
          + Add Project
        </button>
      </div>
      <MenuList
        projects={projects}
        projectSelectionHandler={projectSelectionHandler}
      />
    </menu>
  );
};

export default Menu;

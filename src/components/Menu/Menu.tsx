import React from "react";
import Button from "../StyledComponents/Button";
import { Project } from "src/App";

interface Props {
  projects: Project[];
  selectedProject: Project | "newProject" | undefined;
  newProjectHandler: () => void;
  projectSelectionHandler: (projectId: string) => void;
}

const Menu: React.FC<Props> = ({
  projects,
  selectedProject,
  newProjectHandler,
  projectSelectionHandler,
}) => {
  return (
    // Sidebar on the left of the screen
    <aside className="w-1/3 bg-stone-900 rounded-tr-xl px-10 py-16 md:max-w-96">
      <h1 className="mb-8 text-stone-200 uppercase font-bold md:text-3xl">
        Your Projects
      </h1>
      <div>
        <Button onClick={newProjectHandler}>+ Add Project</Button>
      </div>
      {/* List of projects */}
      <ul className="flex flex-col gap-2 mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={`w-full px-3 py-2 my-1 text-left hover:bg-stone-800 hover:rounded-md hover:text-stone-200 text-2xl ${
                selectedProject !== "newProject" &&
                selectedProject !== undefined &&
                project.id === selectedProject.id
                  ? "bg-stone-800 text-stone-200 rounded-md"
                  : "text-stone-400"
              }`}
              onClick={() => projectSelectionHandler(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;

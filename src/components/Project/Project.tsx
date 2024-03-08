import React from "react";
import { Project as SelectedProject } from "src/App";
import Tasks from "./Tasks";

interface Props {
  project: SelectedProject;
  deleteProjectHandler: (projectId: string) => void;
  addTaskHandler: (projectId: string, task: string) => void;
  clearTaskHandler: (projectId: string, index: number) => void;
}

const Project: React.FC<Props> = ({
  project,
  deleteProjectHandler,
  addTaskHandler,
  clearTaskHandler,
}) => {
  const formatDate = new Date(project.dueDate!).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <section className="w-[46rem] mt-16">
      {/* Project Info */}
      <header className="flex flex-col gap-4 pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-stone-700 font-bold text-4xl">{project.title}</h1>
          <button
            className="text-stone-700 hover:text-red-700 font-semibold text-xl"
            onClick={() => deleteProjectHandler(project.id)}
          >
            Delete
          </button>
        </div>
        <time
          dateTime={project.dueDate}
          className="text-stone-400 font-medium text-2xl"
        >
          {formatDate}
        </time>
        <p className="text-stone-600 pb-2 text-2xl font-normal whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        addTaskHandler={addTaskHandler}
        clearTaskHandler={clearTaskHandler}
        project={project}
      />
    </section>
  );
};

export default Project;
